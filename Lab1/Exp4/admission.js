const createPromises = (text, timer)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text)
        }, timer);
    });
};

const buyProspectus = ()=>{
    return createPromises("Bought Prospectus ", 10);
}
const fillAdmission = ()=>{
    return createPromises("Form Filled ", 200);
}
const submitAdmission = ()=>{
    return createPromises("Admission form submitted ", 100);
}
const verifyAdmission = ()=>{
    return createPromises("Verified the Submission form ", 1000);
}
const answerEntrance = ()=>{
    return createPromises("answered entrance exam", 1000);
}
const passEntrance = ()=>{
    return createPromises("Pass entrance exam ", 100);
}


module.exports={
    buyProspectus,
    fillAdmission,
    submitAdmission,
    verifyAdmission,
    answerEntrance,
    passEntrance

};