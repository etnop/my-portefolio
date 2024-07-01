// import React from 'react';
import { Container, Grid, Typography, styled } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SchoolIcon from '@mui/icons-material/School';
const About = () => {
  const StyledAbout = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.primary.contrastText, // Cor de fundo como a cor primária do tema
    color: theme.palette.primary.main, // Cor de texto contrastante
    // minHeight: '50vh',
    opacity: 0.8,
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    textAlign:"center"
  }));

  const StyledAboutSkill = styled("button")(({theme}) => ({
    backgroundColor:"transparent",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius:"3px",
    padding:"5px 15px",
    width: "100%",
    display:'block',
    color: theme.palette.primary.main,
    alignItems:"center",
    justifyContent:"center",
    gap:"10px",
    '&:hover':{
         backgroundColor: theme.palette.secondary.light
        }
 
  }));

  return (
    <StyledAbout id="section1">
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} >
            <Typography variant="h2" padding={5}>About</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}justifyContent="center">
          <Grid item xs={12} md={3}>
            <StyledAboutSkill >
              <MilitaryTechIcon />
              <Typography fontWeight={800}>Experience</Typography>
              <Typography>4 years full stack dev</Typography>
            
            </StyledAboutSkill>
          </Grid>
          <Grid item xs={12} md={3}>
            <StyledAboutSkill >
              <SchoolIcon />
              <Typography fontWeight={800} >Education</Typography>
              <Typography>Bachelor's degree IRM</Typography>
              
            </StyledAboutSkill>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography padding={5} >I possess the ability to perform, both autonomously and as part of a team, a broad range of activities
related to the conception, specification, planning, implementation, evaluation, support, and maintenance
of computer systems. Additionally, I have knowledge in the field of data processing and transmission
technology, as well as skills in the development of computer applications. My ability to work across various
aspects of the lifecycle of technological projects enables me to contribute effectively to the efficiency and
success of initiatives in this field.</Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledAbout>
  );
};

export default About;
