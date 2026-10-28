const express=require("Express")
const api=require("./api/api.js")

const app=new express();

app.use(express.json());
app.use("/api",api);

app.get("/",(req,res)=>{
    res.send("Hey What's Up")
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})