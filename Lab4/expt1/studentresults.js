function checkMarks(marks){
    return new Promise((resolve,reject)=>{
        if(marks>=40&&marks<65){
            resolve("Uh just passes")
        }else if(marks>=65&&marks<75){
            resolve("Uh got First class ")
        }else{
            reject("Ur excellent")
        }
    })
}

checkMarks(96).then((result)=>{
    console.log(result)
}).catch((result)=>{
    console.log(result)
})