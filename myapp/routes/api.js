const express=require('express');
const path = require('path')
const router=express.Router();
const User = require('../models/user')
const Review = require('../models/review')
const Time = require('../models/time')
const bcrypt=require('bcryptjs')


//ROUTES
router.get('/api/users',(req,res)=>{
    User.find({ })
        .then((data)=> {
            console.log('Data: ',data)
            res.json(data)
        })
        .catch((error)=> {
            console.log('error: ',error)
        })
    
})

router.get('/api/currentuser',(req,res)=>{
    User.findOne({current:"true"})
    .then((savedUser)=>{
        console.log('Data: ',savedUser)
        res.json(savedUser)
    })
    .catch((error)=> {
        console.log('error: ',error)
    })
    
})

router.get('/api/reviews',(req,res)=>{
    Review.find({ })
        .then((data)=> {
            console.log('Data: ',data)
            res.json(data)
        })
        .catch((error)=> {
            console.log('error: ',error)
        })
    
})

router.post('/api/signup',(req,res)=> {
    console.log('Body: ',req.body)
    const data = req.body
    const user = new User(data)
    const name = user.name
    const password = user.password
    const email = user.email
    var current = 'false'

    console.log(req.body)
    if(!user.email || !user.password || !user.name)
    {
        
        return res.status(422).json({error:"Add all data"})
    }
    const testuser=new User(data)
    bcrypt.hash(user.password,12)
    .then((hashedpw)=> {
        User.findOne({email:user.email})
        .then((savedUser)=>{
        if(savedUser){
                console.log(testuser.current)
                console.log(testuser.email)
                console.log(testuser.name)
                console.log(testuser.password)
                
                return res.status(422).json({error:"User already exists with that email"})
        }
        const newuser=new User({
            password:hashedpw,
            name,
            email,
            current
        })
        newuser.save()
        .then((newuser)=>{
            
            res.json({message:"Saved Successfully"})
            console.log(newuser.email)
            console.log(newuser.name)
            console.log(newuser.password)
            console.log(newuser.current)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .catch((err)=>{
        console.log(err)
    }) 
    })
    .catch((err)=>{
        console.log(err)
    })
})
//REVIEWPAGE
router.post('/api/reviewpage',(req,res)=> {
    console.log('Body: ',req.body)
    const data = req.body
    const review = new Review(data)
    const name = review.name
    const review1 = review.review
    const rating = review.rating
    
    console.log(req.body)
    if(!review1 || !name || !rating)
    {
        return res.status(422).json({error:"Add all data"})
    }
    
    review.save()
    .then((review)=>{
        
        res.json({message:"Saved Successfully"})
        console.log(review.name)
        console.log(review.review)
        console.log(review.rating)
        console.log(review.current)
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.post('/api/login',(req,res)=> {
    console.log('Body: ',req.body)
    const data = req.body
    var {name,email,password}=data
    const user = new User(data)
   
    if(!email || !password || !name)
    {
        alert("Please add all fields")
        return res.status(422).json({error:"Please add all fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(!savedUser){
            
            return res.status(422).json({error:"Invalid Email or password"})
       }
        bcrypt.compare(password,savedUser.password)
        .then(match=>{
            if(match)
            {
                User.findOneAndUpdate({email: savedUser.email }, 
                    {current:'true'}, null, function (err, docs) {
                    if (err){
                        console.log(err)
                    }
                    else{
                        console.log("Original Doc : ",docs);
                    }
                })
                
                res.json({message:"Login Successfull"})
                
            }
            else{
                
                return res.status(422).json({error:"Invalid email or password"})
                
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    })
})


router.post('/api/logout',(req,res)=> {
    console.log('Body: ',req.body)
    const data = req.body
    var current = data.current
   
    
    User.findOne({current:current})
    .then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid Email or password"})
       }
       User.findOneAndUpdate({email: savedUser.email }, 
        {current:'false'}, null, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Original Doc : ",docs);
        }
        })
    })
})

router.post('http://127.0.0.1:8887/api/sendtime',(req,res)=> {
    console.log('Body: ',req.body)
    const data = req.body
    var {hours,mins,secs} = data
   
    
    console.log('Body: ',req.body)
    const time = new Time(data)

        time.save()
        .then((newtime)=>{
            
            res.json({message:"Saved Successfully"})
            console.log(newtime.hours)
            console.log(newtime.mins)
            console.log(newtime.secs)
        })
        .catch((err)=>{
            console.log(err)
        })
    
})


router.get('/api/name',(req,res)=>{
    const data = {
        username: 'yametekudasai',
        age: 5
    }
    res.json(data)
})








module.exports = router

