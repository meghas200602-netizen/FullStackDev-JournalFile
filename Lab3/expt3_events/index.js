// const EventEmitter=require("events");
// const eventEmitter=new EventEmitter();

// let doctorAvailable=0;

// eventEmitter.on("visitHospital",()=>{
//     if(doctorAvailable){
//         console.log("Doctor is available")
//         console.log("Patient enters the hospital")
//     }else{
//         console.log("Doctor is not available")
//         console.log("Patient leaves the hospital")
//     }
// });

// eventEmitter.emit("visitHospital");

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();


let hasAppointment = 1;   
let doctorFree = 0;      


eventEmitter.on("patientArrives", () => {
    console.log("Patient arrived at the hospital.");

    if (hasAppointment) {
        console.log("Appointment verified.");
        console.log("Patient is allowed to enter the hospital.");

        
        eventEmitter.emit("checkDoctor");
    } else {
        console.log("No appointment found.");
        console.log("Patient is not allowed to enter the hospital.");
    }
});


eventEmitter.on("checkDoctor", () => {

    if (doctorFree) {
        console.log("Doctor is free.");
        console.log("Patient goes to the doctor's cabin.");
    } else {
        console.log("Doctor is busy with another patient.");
        eventEmitter.emit("wait");
    }

});


eventEmitter.on("wait", () => {
    console.log("Patient waits in the waiting area.");
});


eventEmitter.emit("patientArrives");