import cvPdf from "./assets/cv.pdf";

interface Env {
  ASSETS: Fetcher;
  TURNSTILE_SECRET: string;
  /** Lista separada por vírgulas dos hostnames do frontend aceites (ex.: "pedroponte.dev"). */
  TURNSTILE_HOSTNAMES: string;
  CONTACT_EMAIL: string;
}

const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const forbidden = () =>
  new Response("forbidden", { status: 403, headers: { "Cache-Control": "no-store" } });

async function verifyTurnstile(request: Request, env: Env, expectedAction: string): Promise<boolean> {
  const expectedHostnames = new Set(
    (env.TURNSTILE_HOSTNAMES ?? "")
      .split(",")
      .map((hostname) => hostname.trim())
      .filter(Boolean),
  );

  let token: unknown;
  try {
    const body = (await request.json()) as { token?: unknown };
    token = body?.token;
  } catch {
    return false;
  }

  if (
    typeof token !== "string" ||
    token.length === 0 ||
    token.length > 2048 ||
    expectedHostnames.size === 0 ||
    !env.TURNSTILE_SECRET
  ) {
    return false;
  }

  let result: { success?: boolean; action?: string; hostname?: string };
  try {
    const r = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      signal: AbortSignal.timeout(10_000),
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: token,
        remoteip: request.headers.get("CF-Connecting-IP") ?? "",
      }),
    });
    if (!r.ok) throw new Error(`siteverify ${r.status}`);
    result = await r.json();
  } catch {
    return false;
  }

  return (
    result.success === true &&
    result.action === expectedAction &&
    typeof result.hostname === "string" &&
    expectedHostnames.has(result.hostname)
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/cv" || pathname === "/api/contact") {
      if (request.method !== "POST") {
        return new Response("method not allowed", { status: 405, headers: { Allow: "POST" } });
      }

      const action = pathname === "/api/cv" ? "cv" : "contact";
      if (!(await verifyTurnstile(request, env, action))) {
        return forbidden();
      }

      if (action === "cv") {
        return new Response(cvPdf, {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": 'inline; filename="Pedro Ponte EN.pdf"',
            "Cache-Control": "no-store",
          },
        });
      }

      return Response.json({ email: env.CONTACT_EMAIL }, { headers: { "Cache-Control": "no-store" } });
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
