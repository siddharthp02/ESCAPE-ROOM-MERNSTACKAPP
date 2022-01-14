import React from 'react'
import "./about.css"
import shreyash from "./static/shreyash.jpg.png"
import shrinithi from "./static/shrinithi.png"
import sidp from "./static/sidp.png"
import about from "./static/about.jpg"
function About() {
    return (
        <div className = "bodyabout">
            <div className="about-section">
                <h1>About Us Page</h1>
            </div>

            <h2 id = "heading" style={{textAlign:"center"}}>Meet the Creators</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                
                        <div className="container">

                            <h2>Shreyash Chatterjee</h2>
                             <img src = {shreyash} style = {{height:"50%", width:"50%"}}/>
                            <p className="title">PES1UG20CS410</p>
                            <p>shreyashchatterjee@gmail.com</p>
                    
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                
                        <div className="container">
                            <h2>Shrinithi Natarajan</h2>
                            <img src = {shrinithi} style = {{height:"50%", width:"50%"}}/>
                            <p className="title">PES1UG20CS413</p>
                    
                            <p>kavinattu2001@gmail.com</p>
                    
                        </div>
                    </div>
                </div>
            
                <div className="column">
                    <div className="card">
                
                        <div className="container">
                            <h2>Siddharth Padmakumar</h2>
                            <img src = {sidp} style = {{height:"50%", width:"50%"}}/>
                            <p className="title">PES1UG20CS427</p>
                    
                            <p>siddharth.padmakumar2002@gmail.com</p>
                    
                        </div>
                    </div>
                </div>
            </div>

            <p id = "content">Our escape rooms were designed to give all players the ultimate way to test their skills and experience a unifying, thought-provoking adventure. As you solve our puzzles and tasks, you’ll learn about your own abilities and strengths, as well as your co-workers, friends or family.</p>
            <img src = {about} id = "about_img"/>
            <p id = "content2">Way back in the days before social distancing (remember those?), escape rooms offered a fun way to entertain the family and increase team-building skills. Think of it: The whole clan in one spot, working together to hunt down clues and solve puzzles in a limited amount of time—what could be finer? Unfortunately, depending on where you live, your favorite place to test your family's mettle may be temporarily closed for the time being. Not to worry! Much like going on virtual Disneyland ride tours, you can still experience the rush of solving puzzles from your living room.</p>

        </div>
    )
}

export default About
