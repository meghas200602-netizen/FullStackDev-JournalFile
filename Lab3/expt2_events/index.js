const EventEmitter=require("events");
const eventEmitter=new EventEmitter();

let lightState=0;

eventEmitter.on("turnON",()=>{
    if(lightState == 0){
        console.log("Light is OFF")
        lightState=1
        console.log("Light is turned ON")
    }else{
        console.log("Light is already ON")
    }
})

eventEmitter.on("turnOFF",()=>{
    if(lightState == 1){
        console.log("Light is ON")
        lightState=0
        console.log("light turned OFF")
    }else{
        console.log("light is already OFF")
    }
})

eventEmitter.emit("turnOFF")
eventEmitter.emit("turnON")
eventEmitter.emit("turnON")