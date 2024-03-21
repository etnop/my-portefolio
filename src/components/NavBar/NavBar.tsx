import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
}));

const NavBar = () => {
  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
