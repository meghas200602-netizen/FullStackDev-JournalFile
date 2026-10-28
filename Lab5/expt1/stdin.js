const fs=require("fs")

// const writeStream=fs.createWriteStream("./Swrite.txt","utf8")

// console.log("Type smtg")

// process.stdin.on("data",(type)=>{
//     writeStream.write("Hey hello everyone")
//     console.log(),type.toString())
// })

// writeStream.close();
console.log("Type smtg:")


process.stdin.pipe(fs.createWriteStream("Swrite.txt","utf8"));