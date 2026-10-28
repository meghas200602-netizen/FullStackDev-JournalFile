const fs = require("fs");
const { readFile } = require("fs/promises");
console.log("Start");
const data = fs.writeFile("file1.txt","hello............",(err)=>{
    if (err) {
        console.log(err)
    }
    console.log("File written succesfully")

});

data_1 = fs.readFileSync("file1.txt","utf-8")
console.log("this is",data_1)
console.log("End");