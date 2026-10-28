const express=require("express")
const fs=require("fs")

const app=new express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        name:"Sanket",
        rollno:29
    });
})

app.post("/studentsData",(req,res)=>{
    const{name,rollno}=req.body;
    fs.writeFile("post.txt",
        `Name: ${name}\nrollno: ${rollno}\n`,
        (err)=>{
            if (err){
                return res.status(500).send("error is found")
            }
        }
    )
    res.send("progress")
})



app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})