const fs = require("fs");

console.log("Start");
console.log(1);

fs.readFile("./data.txt", "utf-8", (err, data) => {
    console.log(data);
});

console.log(2);
console.log(3);
console.log(4);

const data = fs.readFileSync("./Plain.txt", "utf-8");

console.log(data);
console.log(5);
console.log("End");

//webpack 
// >app> files>app.js,message.js
//dist-folder  > bundle.js
//nodemodules.webpack.config.js



//bundle.js using 



//node dist/studentdetails.js
//Items saved
//getting students details
// {name: 'sk', age: '18', rollno: 'NA'}
//