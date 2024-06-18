const express = require("express");
require("./conn/conn");
const app = express();
app.use(express.json());
const router = require("./routes/route");



app.use(express.static("profile_Schema"))
app.use(router);

app.listen("4000",()=>{
    console.log(`connected to port 4000`)
})