const fs=require("fs")


const readStream=fs.createReadStream("hey.txt","utf8")
const writeStream=fs.createWriteStream("./hey_2.txt","utf8");

readStream.pipe(writeStream);