const EventEmitter = require("events");

const emitter = new EventEmitter();

// Listen for the event
emitter.on("hello", () => {
    console.log("Hello");
});

// Emit (trigger) the event
emitter.emit("hello");

let lightBulb = 0;
emitter.on("turnON" , ()=>{
    if(!lightBulb){
        lightBulb = 1;
    }else{
        console.log("Light is already ON");
    }
});
emitter.on("turnOFF" , ()=>{
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