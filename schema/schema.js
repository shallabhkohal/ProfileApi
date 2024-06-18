const mongoose = require("mongoose");
const validator = require("validator")

const profileSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validate:function(value){
            return validator.isEmail(value)
        }
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    pincode:{
        type:Number,
        required:true,
        trim:true
    }
})

const pSchema = mongoose.model("profile",profileSchema);

module.exports = pSchema;