import React from 'react'
import "./home.css"
import covervid from './static/video.mp4';
import poster from "./static/poster.png"

function Home() {
    return (
        <div className = "body">
            <video autoPlay muted loop id="myVideo">
                <source src={covervid} type="video/mp4"/>
            </video> 
            
            <div id="home" className="main_box"  style = {{textAlign:"center"}}>
                <h1>Welcome to The Escape Room</h1>
                <img src= {poster} alt="image" className="img_frame img_float_l" />
            </div>
        </div>
    )
}

export default Home
