import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import { Download, Email } from "@mui/icons-material";
import StyleButton from "../../../../components/StyleButton/StyleButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import fundo from "../../../../assets/images/fundo.png";
import cv from "../../../../assets/Pedro Ponte EN.pdf";
const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    position: "relative",
    backgroundColor: theme.palette.primary.main,

    height: "100vh",
    opacity: 0.8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${fundo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 1, // Adjust the opacity as needed
      zIndex: -1,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)", // Fundo preto com opacidade
      zIndex: -1,
    }
  }));
  const StyledImg = styled("img")(({ theme }) => ({
    width: "100%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.contrastText}`,
  }));


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cv; // Path to your PDF file
    link.title='Pedro Ponte';
    link.target='_blank';

    // link.download = 'your-file-name.pdf'; // Name of the file to be downloaded
    link.click();
  }; 
  const sendmail = () => {
    const link = document.createElement('a');
    link.href = 'mailto:pedroponte1989@gmail.com'; 
    link.title='Pedro Ponte';
    link.target='_blank';

    link.click();
  };
  return (
    <>
      <StyledHero >
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
                spacing={2}
                pt={3}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyleButton onClick={handleDownload}>
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
                  <StyleButton onClick={sendmail}>
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
