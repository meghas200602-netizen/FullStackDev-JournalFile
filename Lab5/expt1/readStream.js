const fs=require("fs")

const readStream=fs.createReadStream("hey.txt",{highWaterMark:20,encoding:"utf8"});

readStream.on("data",(chunk)=>{
    console.log(chunk)
})