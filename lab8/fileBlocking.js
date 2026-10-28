const fs = require("fs");
console.log("Hello");

const data = fs.readFileSync("file.txt","utf-8");

console.log("file content",data);
console.log("Bye");