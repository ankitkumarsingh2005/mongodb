const mongoose = require("mongoose");

//create  a schema 

const userSchema = new mongoose.Schema({
    name: {
        type : String,
    },
    email : {
        type : String
    },
    city : {
        type : String
    },
    gender : {
        type : String
    },
    password : {
        type : String
    },
    age : {
        type : Number
    }
    
})

// create a model

const User = mongoose.model("User",userSchema)
module.exports = User