const express=require("express")


const router=express.Router();
const studentRouter=require("./student/student");
const teacherRouter=require("./teacher/teacher");
router.get("/getTeacherDetails",(req,res)=>{
    res.send("in api")
})

router.use("/student",studentRouter);
router.use("/teacher",teacherRouter);

module.exports=router;