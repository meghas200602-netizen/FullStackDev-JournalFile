const EventEmitter = require("events");
const emitter = new EventEmitter();
let doctor = {
    state: 0 ,
}
let appointment = {
    state: 1,
};

emitter.on("takeAppointment",()=>{
    if (doctor.state=== 1) {
        console.log("Doctor is available\n");
        if(appointment.state===1){
            console.log("appointment can be taken\n");
        }else{
            console.log("appointment cant be taken\n");
        }
    } else {
        console.log("doctor is not available\n");
    }
});

emitter.emit("takeAppointment");
