
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import axios from 'axios'
import HomeIcon from '@mui/icons-material/Home';



import Home from "../pages/home/index"
import {Login} from "../pages/login/index"
import Review from "../pages/review/index"
import Leaderboard from "../pages/leaderboard/index"
import Storyline from "../pages/storyline/index"
import About from "../pages/about/index"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';





// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" style = {{backgroundColor : "#303030"}}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
            
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             ESCAPE ROOM
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <Link to = "/home" ><HomeIcon fontSize="large" style = {{color : "white"}}/></Link>
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <Link to = "/login" style = {{color : "white", textDecoration : "none",}}>Login</Link>
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <Link to = "/review">Review</Link>
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <Link to = "/leaderboard">Leaderboard</Link>
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <Link to = "/storyline">Storyline</Link>
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <a href="http://127.0.0.1:8887/myapp/client/src/pages/level1/static/HTML_Files/Game_Page.html">Level 1</a>
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <a href = "http://127.0.0.1:8887/myapp/client/src/pages/level1/static/HTML_Files/Level_2.html">Level 2</a>
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }


var pages = [<Link to = "/home" ><HomeIcon fontSize="large" style = {{color : "white"}}/></Link>,<Link to = "/storyline" style = {{color : "white", textDecoration : "none",}}>Storyline</Link>,<Link to = "/login" style = {{color : "white", textDecoration : "none",}}>Login</Link>]

const settings = ['Logout'];

function useForceUpdate(){
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const ResponsiveAppBar = () => {
  // React.useEffect(() => {
  //   const [value, setValue] = React.useState(0); // integer state
  //   return () => setValue(value => value + 1); // update the state to force render
  // }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const forceUpdate = useForceUpdate();
 
  const getcurrent = ()=> {
    axios.get('/api/currentuser')
      .then((response)=> {
        const data = response.data
        console.log('Data has been received wow!')
        console.log(data)
        if(data!=null){
          pages = [ <Link to = "/home" ><HomeIcon fontSize="large" style = {{color : "white"}}/></Link>,<Link to = "/storyline" style = {{color : "white", textDecoration : "none",}}>Storyline</Link>,<a href="http://127.0.0.1:8887/client/src/pages/level1/static/HTML_Files/Game_Page.html" style = {{color : "white", textDecoration : "none",}}>Level 1</a>,<a href = "http://127.0.0.1:8887/client/src/pages/level1/static/HTML_Files/Level_2.html" style = {{color : "white", textDecoration : "none",}}>Level 2</a>, <Link to = "/leaderboard" style = {{color : "white", textDecoration : "none",}}>PLAYERS</Link>,<Link to = "/review" style = {{color : "white", textDecoration : "none",}}>Review</Link>];
        }
      })
      .catch(() => {
        alert('Error retreiving data!')
        
      })
  }

  const logout = ()=>{
    const payload = {
      current: "true"
    }

    axios({
      url:'/api/logout',
      method: 'POST',
      data: payload
    })
      .then(()=> {
        alert("logged out")
        console.log("Data has been sent to the server")
        
        
      })
      .catch(()=> {
        alert("Not logged in!")
      })

    
  }

  
 getcurrent()
  
  return (
    <AppBar position="static"  style = {{backgroundColor : "#303030"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            ESCAPE ROOM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={logout}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              
              <MenuItem key={"logout"} onClick={logout}>
                <a href = "http://localhost:3000/home">LOGOUT</a>
              </MenuItem>
              {/* <MenuItem key={"login"} onClick={getcurrent()}>
                <Typography textAlign="center">login</Typography>
              </MenuItem> */}
              
              
               
              
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={forceUpdate}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                 <Link to = "/home" style = {{color : "white", textDecoration : "none",}}>CONTINUE</Link>
              </Button>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export {ResponsiveAppBar}
// export default ResponsiveAppBar;
