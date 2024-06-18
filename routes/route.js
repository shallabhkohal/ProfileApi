const express = require("express");
const proSchema = require("../schema/schema");

const app = express();

const router = new express.Router();


router.post("/add", (req,res)=>{
    try{
        const data = new proSchema(req.body);
        data.save();
        res.send(`data inserted successfully: ${data}`).status(201)
    }catch(err){
        res.send("not inserted").status(401)
    }
})

router.get("/fetch/:id", async (req,res)=>{
    try{
        const fetch = await  proSchema.findById(req.params.id);
        res.send(fetch)
    }catch(err){
        res.send(err)
    }
})


module.exports = router;
