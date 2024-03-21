import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import { Download, Email } from "@mui/icons-material";
import StyleButton from "../../../../components/StyleButton/StyleButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));
  const StyledImg = styled("img")(({ theme }) => ({
    width: "100%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.contrastText}`,
  }));
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box position={"relative"}>
                <Box
                  position={"absolute"}
                  width={"100%"}
                  top={-100}
                  right={"0"}
                >
                  <AnimatedBackground></AnimatedBackground>
                </Box>
                <Box position={"relative"} textAlign={"center"}>
                  <StyledImg src={Avatar} alt="avatar" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8} pb={2}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                Pedro Ponte
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                I'm a Software Engineer
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={2}     pt={3}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
               
                >
                  <StyleButton>
                    <Download></Download>
                    <Typography>Download cv</Typography>
                  </StyleButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
              
                >
                  <StyleButton>
                    <Email></Email>
                    <Typography>Contact me</Typography>
                  </StyleButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
