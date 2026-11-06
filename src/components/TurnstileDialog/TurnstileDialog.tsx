import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export const TURNSTILE_SITEKEY = "0x4AAAAAAF2BrS2nXuJNrbxX";

interface TurnstileDialogProps {
  open: boolean;
  /** Ação Turnstile; o Worker confirma que o token foi emitido para esta ação. */
  action: "cv" | "contact";
  title: string;
  onClose: () => void;
  /** Recebe o token e chama o backend. Deve lançar erro se o pedido falhar. */
  onToken: (token: string) => Promise<void>;
}

const TurnstileDialog: React.FC<TurnstileDialogProps> = ({ open, action, title, onClose, onToken }) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const widgetId = useRef<string | null>(null);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open || !container) return;
    setError(null);

    let cancelled = false;
    let pollTimer: number | undefined;

    const render = () => {
      if (cancelled) return;
      if (!window.turnstile) {
        pollTimer = window.setTimeout(render, 100);
        return;
      }
      widgetId.current = window.turnstile.render(container, {
        sitekey: TURNSTILE_SITEKEY,
        action,
        theme: "auto",
        callback: async (token) => {
          try {
            await onTokenRef.current(token);
            onCloseRef.current();
          } catch {
            setError("Não foi possível concluir o pedido. Tenta novamente.");
            // Os tokens são de uso único: repor o widget antes de nova tentativa.
            if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
          }
        },
        "error-callback": () => setError("Falha na verificação. Tenta novamente."),
      });
    };
    render();

    return () => {
      cancelled = true;
      window.clearTimeout(pollTimer);
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
  }, [open, container, action]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <div ref={setContainer} />
        {error && (
          <Typography color="error" variant="body2" mt={1}>
            {error}
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TurnstileDialog;
