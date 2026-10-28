const EventEmitter = require("events");

const emitter = new EventEmitter();

let lightBulb1= {
    state:0,
}
let lightBulb2= {
    state:0,
}
let lightBulb3= {
    state:1,
}
let lightBulb4= {
    state:0,
}
emitter.on("turnON" , (lightState)=>{
    console.log("turn off")
    if(!lightBulb.state){
        lightBulb = 1;
    }else{
        console.log("Light is already ON");
    }
});
emitter.on("turnOFF" , (lightState)=>{
    if(lightBulb){
        lightBulb = 0;
    }else{
        console.log("Light is already off");
    }
});

emitter.on("checkLight" ,()=>{
    console.log("Light is" ,lightBulb?"ON":"OFF");
});

emitter.emit("turnON");
emitter.emit("turnOFF");
emitter.emit("turnON");
emitter.emit("checkLight");