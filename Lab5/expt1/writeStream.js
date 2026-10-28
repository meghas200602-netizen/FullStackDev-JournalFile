const fs=require("fs");

const writeStream=fs.createWriteStream("./StudentsData.txt","utf8")

writeStream.write("Hey my name is Sanket \n")
writeStream.write("I love coding \n")
writeStream.write("Hey its not up \n")
writeStream.write("Hey Uh can do it \n")

writeStream.close();