// import React from 'react';
import { Container, Grid, Typography, styled } from '@mui/material';
import LinhaHorizontal from '../../../../components/LinhaHorizontal/LinhaHorizontal';

const Skills = () => {
  const StyledSkills = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.primary.contrastText, // Cor de fundo como a cor primária do tema
    color: theme.palette.primary.dark, // Cor de texto contrastante
    // minHeight: '50vh',
    paddingBottom:"50px",
    // opacity: 0.8,
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    textAlign:"center"
  }));

  const StyledSkill = styled("button")(({theme}) => ({
    backgroundColor:"transparent",
    border: `1px solid ${theme.palette.primary.dark}`,
    borderRadius:"3px",
    padding:"5px 15px",
    width: "100%",
    display:'block',
    color: theme.palette.primary.dark,
    alignItems:"center",
    justifyContent:"center",
    gap:"10px",
    '&:hover':{
         backgroundColor: theme.palette.secondary.light
        }
 
  }));
const languages=["JAVA","PHP","CSS","HTML","PYTHON","MYSQL","Javascript","Typescript","GIT","Angular","React"];
  return (
    <StyledSkills id="section2">
      <Container maxWidth="lg">
      <LinhaHorizontal/>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} >
            <Typography variant="h2" padding={5}>Skills</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}justifyContent="center">
        {languages.map((language, index) => (
            <Grid key={index} item xs={12} md={3}>
              <StyledSkill>
                <Typography>{language}</Typography>
              </StyledSkill>
            </Grid>
          ))}
         
       
        </Grid>
        
      </Container>
    </StyledSkills>
  );
};

export default Skills;
