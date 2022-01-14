import React from 'react'
import './login.css';
import axios from 'axios'
import '../../components/appbar' 
import HomeIcon from '@mui/icons-material/Home';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'



const unloggedpages = [<Link to = "/home" ><HomeIcon fontSize="large" style = {{color : "white"}}/></Link>,<Link to = "/login" style = {{color : "white", textDecoration : "none",}}>Login</Link>,<Link to = "/storyline" style = {{color : "white", textDecoration : "none",}}>Storyline</Link>]
const pages = [ <Link to = "/home" ><HomeIcon fontSize="large" style = {{color : "white"}}/></Link>,<Link to = "/login" style = {{color : "white", textDecoration : "none",}}>Login</Link>,<Link to = "/review" style = {{color : "white", textDecoration : "none",}}>Review</Link>, <Link to = "/leaderboard" style = {{color : "white", textDecoration : "none",}}>Leaderboard</Link>,<Link to = "/storyline" style = {{color : "white", textDecoration : "none",}}>Storyline</Link>,<a href="http://127.0.0.1:8887/myapp/client/src/pages/level1/static/HTML_Files/Game_Page.html" style = {{color : "white", textDecoration : "none",}}>Level 1</a>,<a href = "http://127.0.0.1:8887/myapp/client/src/pages/level1/static/HTML_Files/Level_2.html" style = {{color : "white", textDecoration : "none",}}>Level 2</a>];


class Login extends React.Component{

    state = {
        name:'',
        email:'',
        password:'',
        current:'',
        review:'',
        rating:'',
        users: [],
        currentuser: [],
        reviews:[],
        ratings:[],
      }

    handleChange = ({target}) => {
        const {name,value} = target
        this.setState({[name] : value})
        this.setState({current:false})
    };

    getcurrent = ()=> {
      axios.get('/api/currentuser')
        .then((response)=> {
          const data = response.data
          this.setState({currentuser : data})
          console.log('Data has been received!')
          console.log(data)
        })
        .catch(() => {
          alert('Error retreiving data!')
        })
    }

    login = ()=>{
        const payload = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          current: this.state.current
        }
    
        axios({
          url:'/api/login',
          method: 'POST',
          data: payload
        })
          .then(()=> {
            alert("Login successful, please click TWICE on CONTINUE beside the profile.")
            console.log("Data has been sent to the server")
            this.getcurrent()
            // this.loadreviewpage()
          })
          .catch(()=> {
            alert("Please add all fields/invalid email or password!")
            console.log("Please add all fields/invalid email or password!")
          })
    
        
      }
      
      
      register = ()=>{
        const payload = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          current: this.state.current
        }
    
        axios({
          url:'/api/signup',
          method: 'POST',
          data: payload
        })
          .then(()=> {
            alert("signup successful")
            console.log("Data has been sent to the server")
          })
          .catch(()=> {
            alert("Please fill in all entries/ user already exists!!")
            console.log("Please fill in all entries/ user already exists!!")
          })
      }

    
    render(){
        return (
            <div id = "page">
                <div id = "back">
                    <div id = "container">
                        <div id = "head">
                            <h1 className = "login">Login</h1>
                        </div>
                        <div id = "formarea">
                            <form className = "form">
                                <label className = "label" >Name:</label><br/>
                                <input type = "text" className = "input" name = "name" placeholder = "Enter name here" className = "entertext" id = "name" value = {this.state.name} onChange = {this.handleChange} autoFocus/><br/><br/><br/>
                                <label className = "label">Gmail:</label><br/>
                                <input value = {this.state.email} onChange = {this.handleChange} type = "email" name = "email" placeholder = "Enter text" required className = "entertext" id ="email" /><br/><br/><br/>
                                <label className = "label">Password:</label><br/>
                                <input value = {this.state.password} onChange = {this.handleChange} type = "password" name = "password" placeholder = "Max length 8" maxLength="8" className = "entertext" id = "password"/><br/><br/><br/>
                            </form>
                        </div>
                        <div id = "submitarea">
                            <button onClick = {this.register} type = "submit" className = "submit" id = "submit">Register</button>
                            <button onClick = {this.login}type = "submit" className = "submit" id = "submit1">Login</button>
                            {/* <button onClick={this.loadleaderboard}>form</button>  */}
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export {Login}
