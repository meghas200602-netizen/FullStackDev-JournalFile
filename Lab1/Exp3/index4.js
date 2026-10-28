const EventEmitter = require("events");
const emitter = new EventEmitter();

// 4 bulbs
let lightBulb1 = { state: 0 };
let lightBulb2 = { state: 1 };
let lightBulb3 = { state: 0 };
let lightBulb4 = { state: 1 };

// helper function
function turnOff(bulb, number) {
    console.log(`turn off ${number}`);

    if (bulb.state === 0) {
        console.log("light is OFF\n");
    } else {
        bulb.state = 1;
        console.log("light is ON\n");
    }
}

// event
emitter.on("turnOFF", (bulb, number) => {
    turnOff(bulb, number);
});

// emit events
emitter.emit("turnOFF", lightBulb1, 1);
emitter.emit("turnOFF", lightBulb2, 2);
emitter.emit("turnOFF", lightBulb3, 3);
emitter.emit("turnOFF", lightBulb4, 4);