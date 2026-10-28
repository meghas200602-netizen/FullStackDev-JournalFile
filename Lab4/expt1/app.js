

const express=require("express")
const fs=require("fs")
const app=new express();
const PORT=3000;

// MiddleWare
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server is Running")
});

app.listen(PORT,()=>{
    console.log(`Listening on port number ${PORT}`)
});

app.post("/saveStudentsData",(req,res)=>{

    const data=`Name: ${req.body.name}, id:${req.body.id},class:${req.body.class}\n`;

    fs.appendFile("hey.txt",data,(err)=>{
        console.log(err)
    })
    console.log(req.body)
    res.send("student data received")
})

