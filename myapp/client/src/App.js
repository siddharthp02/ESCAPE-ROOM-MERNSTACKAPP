import './App.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import * as React from 'react'
import ReactDOM from 'react-dom'

import Home from "./pages/home/index"
import {Login,unloggedpages,pages} from "./pages/login/index"
import Review from "./pages/review/index"
import Leaderboard from "./pages/leaderboard/index"
import Storyline from "./pages/storyline/index"
import About from "./pages/about/index"
// import Level1 , {Dial, Popup, Cell, Grid} from "./pages/level1/index"




import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import MiniDrawer from './components/drawer'
import {ResponsiveAppBar} from './components/appbar'


class App extends React.Component {

  
 

  render() {

    return (
      
      <Router>
        <ResponsiveAppBar/>
        {/* <Home/> */}
        {/* <MiniDrawer/> */}
        {/* <span>
          <Link to = "/home"><HomeIcon fontSize="large" color="primary"/></Link>
        </span>
        <span>
          <Button size = "small" variant = "outlined"><Link to = "/login">Login</Link></Button>
        </span>
        <span>
          <Button size = "small" variant = "outlined"><Link to = "/review">Review</Link></Button>
        </span>
        <span>
          <Button size = "small" variant = "outlined"><Link to = "/leaderboard">Leader board</Link></Button>
        </span>
        <span>
          <Button size = "small" variant = "outlined"><Link to = "/storyline">Storyline</Link></Button>
        </span> */}
        {/* <span>
          <Button size = "small" variant = "outlined"><Link to = "/about">About us</Link></Button>
        </span> */}
        {/* <hr/> */}

        <Routes>
          <Route path = "/home" element = {<Home/>} />
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/review" element = {<Review/>} />
          <Route path = "/leaderboard" element = {<Leaderboard/>} />
          <Route path = "/storyline" element = {<Storyline/>} />
          <Route path = "/about" element = {<About/>} />
          {/* <Route path = "/level1" element = {<Level1/>} /> */}
        </Routes>

      </Router>
    );
  }
}

export default App;
