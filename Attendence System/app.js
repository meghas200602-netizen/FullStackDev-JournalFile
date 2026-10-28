const express = require("express");
const studentdetails =require("./services/StudentServices")
const app = express();


app.use(express.json());

app.post("/studentDetails",studentdetails.createStudent)
app.get("/studentDetails",studentdetails.getAllStudents)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
