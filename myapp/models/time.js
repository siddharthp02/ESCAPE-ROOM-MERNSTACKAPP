//schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema1 = new Schema({
    hours:{
        type:Number,
        required:true
    },
    mins:{
        type:Number,
        required:true
    },
    secs:{
        type:String,
        required:true
    },
    
});

//model
const Time = mongoose.model("Time",UserSchema1);

module.exports = Time