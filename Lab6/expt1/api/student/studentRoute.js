const express=require("express")

const router=express.Router();

router.get("/getstudentinfo",(req,res)=>{
    res.send("get student info")
})

router.get("/save",(req,res)=>{
    res.send("save student")
})

module.exports=router;