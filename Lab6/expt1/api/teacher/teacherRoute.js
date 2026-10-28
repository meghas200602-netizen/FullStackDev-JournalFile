const express=require("express");

const router=express.Router()
const teacherController=require("./teacherController")

router.get("./getteacherinfo",(req,res)=>{
    res.send("Getting teacher info")
});

router.get("/save",(req,res)=>{
    res.send("save teacher details")
})

// router.get("/",(req,res)=>{
//     res.send("teacher")
// })

module.exports=router;