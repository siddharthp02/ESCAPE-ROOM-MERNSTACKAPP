//schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema1 = new Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    current: {
        type:Boolean,
        required:true
    }
});

//model
const Review = mongoose.model("Review",UserSchema1);

module.exports = Review