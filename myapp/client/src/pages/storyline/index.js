import React from 'react'
import "./storyline.css"
import room1 from "./static/Room1.jpeg"
import room2 from "./static/Room2.jpeg"
function Storyline() {
    return (
        <div className = "bodystory">
            <div id = "top_bar">
			    <h1>Storylines</h1>
            </div>
            <br/>
            <br/>
            <div id = "image">
                <figure><img src = {room1} alt="image" className="er1" /></figure>
            </div>
            <div id = "desc1">
                <p>An abandoned steam engine room with old dingy walls and broken equipment. You are trapped inside the room with very little time in your hands before the boiler explosion is triggered. Find your escape as soon as possible to enter into level 2 of the game.</p>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div id = "image">
                <figure><img src = {room2} alt="image" className="er1" /></figure>
            </div>
            <div id = "desc2">
                <p>You are trapped in an abandoned and messy vintage home. Your goal is to escape the room in the least time possible. Watch out for the tiniest possible clues to help you out. Test your observations and instincts to escape this mystical place!</p>
            </div>
        </div>
    )
}

export default Storyline
