//0OhYC35m7XC7ASKl
//mongodb+srv://shallabhrajput9:0OhYC35m7XC7ASKl@cluster0.akicumd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shallabhrajput9:0OhYC35m7XC7ASKl@cluster0.akicumd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{})
.then(()=>{
    console.log("Mongodb connected")
})
.catch((err)=>{
    console.log(err)
})