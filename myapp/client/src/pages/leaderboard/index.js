import React, { Component } from 'react'
import "./leaderboard.css"
import axios from 'axios'


export default class Leaderboard extends Component {
  state = {
    name:'',
    email:'',
    password:'',
    current:'',
    review:'',
    rating:'',
    users: [],
    reviews:[],
    ratings:[],
  }

  getusers = ()=> {
    axios.get('/api/users')
      .then((response)=> {
        const data = response.data
        this.setState({users : data})
        console.log('Data has been received!')
      })
      .catch(() => {
        alert('Error retreiving data!')
      })
  }

  displayusers = (users) => {
    if(!(users.length)) return (null);

    const stuff =  users.map((user, index) => (
      <tr key = {index}>
        <td>{index+1}</td>
        <td>{user.name}</td>
      </tr>
      

    ))
    const newstuff = (
    <table className = "table_data" cellSpacing = "10%" cellPadding = "10%" >
        <tr>
          <th>No.</th>
          <th>name</th>
        </tr>
        {stuff}
    </table>)
    return newstuff
    
    
  }

  componentDidMount = () =>{
    this.getusers()
    
  }
    render() {
        return (
            <div id = "leaderboardpage">
                <div>
                  <div>
                        <div id = "head">
                          <h1 className = "login" align = "center">PLAYER LIST</h1>
                        </div>
                        {/* <table className = "table_data" cellSpacing = "10%" cellPadding = "10%" border = "3px">
                            
                            <tr>
                            <th>Position</th>
                            <th>Name</th>
                            </tr>
                            <tr>
                              <td>hello</td>
                              <td>wow</td>
                            </tr>
                            <tr>
                              <td>hellowow</td>
                              <td>hellwoowowowow</td>
                            </tr>
                            

                        </table> */}
                        {this.displayusers(this.state.users)}
                  </div>
                </div>
        </div>
        )
    }
}
