import React, { Component } from 'react'
import "./review.css"
import axios from 'axios'

export default class Review extends Component {

    state = {
        name:'',
        email:'',
        password:'',
        current:'true',
        review:'',
        rating:'',
        users: [],
        reviews:[],
        ratings:[],
      }

    handleChange = ({target}) => {
        const {name,value} = target
        this.setState({[name] : value})

    };
    
   
    componentDidMount = () =>{
    
    this.getreviews()
    
  }
    
    getreviews = ()=> {
        axios.get('/api/reviews')
          .then((response)=> {
            const data = response.data
            this.setState({reviews : data})
            console.log('Data has been received!')
          })
          .catch(() => {
            alert('Error retreiving data!')
          })
      }

    registerreview = () =>{
        const payload = {
          name: this.state.name,
          rating : this.state.rating,
          review: this.state.review,
          current: this.state.current
        }
    
        axios({
          url:'/api/reviewpage',
          method: 'POST',
          data: payload
        })
          .then(()=> {
            alert("Review recorded!")
            console.log("Data has been sent to the server")
            this.getreviews()
          })
          .catch(()=> {
            alert("Please fill in all entries")
            console.log("Please fill in all entries")
          })
    
          
    
      }
    
      
    
    displayreviews = (reviews)=> {
        if(!(reviews.length)) return (null);
    
        return reviews.map((review, index) => (
          <div key = {index} className = "reviewpost">
            <h3>{review.name}</h3>
            <p>{review.rating}</p>
            <p>{review.review}</p>
          </div>
        ))
      }

    

    render() {
        return (
            <div className = "reviewpage-body">
                <br/>
                <br/>
                <br/>
                <form>
                    <h1>Reviews</h1>
                    <input value = {this.state.name} onChange = {this.handleChange} className = "box" type = "text" name = "name" id = "name" placeholder = "name" required/>
                    <br/>
                    <input value = {this.state.rating} onChange = {this.handleChange} className = "box" type = "number" name = "rating" id = "rating" placeholder = "rating" required/>
                    <br/>
                    <input value = {this.state.review} onChange = {this.handleChange} className = "box" type = "text" name = "review" id = "review" placeholder = "review" required/>
                    <br/>
                </form>
                <button onClick = {this.registerreview} className = "submitreview" type = "submit" id = "submitDetails" name = "submitDetails" value = "Submit">Submit</button>
                <button type = "button" className = "submitreview" onClick = {this.loadleaderboard}>Leaderboard</button>
                <br/>
                <div className = "reviewlist">
                    {this.displayreviews(this.state.reviews)}
                </div>
          </div>
        )
    }
}
