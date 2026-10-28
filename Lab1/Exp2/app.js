const express =require("express");
const app=express();
app.get("/about",(req ,res)=>{
    res.send("about")
})
app.get("/home",(req ,res)=>{
    res.send("home")
})

app.get('/', (req,res) => {
    res.send("Port 3000   ")
});

app.listen(3000);