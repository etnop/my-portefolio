import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link  } from 'react-scroll';


const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
}));

const NavBar = () => {
  return (
    <>
     <Router>
      <div>
        <AppBar position="absolute">
        <StyledToolbar>
          <Toolbar>
            {/* <MenuItem> <a href="" >Home</a></MenuItem> */}
            <MenuItem> 
            <Link 
             activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
               style={{ color: '#fff', fontSize: '1.2em', textDecoration: 'none' }}>About</Link></MenuItem>
            <MenuItem> <Link
             activeClass="active"
             to="section2"
             spy={true}
             smooth={true}
             offset={-70}
             duration={500}
             style={{ color: '#fff', fontSize: '1.2em', textDecoration: 'none' }} >Skills</Link></MenuItem>


          </Toolbar>
          </StyledToolbar>
        </AppBar>

        {/* <Route path="/projects" component={()} /> */}
      </div>
    </Router>

    </>
  );
};

export default NavBar;
