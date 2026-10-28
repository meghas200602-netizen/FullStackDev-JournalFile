const cron = require("node-cron")

cron.schedule("*/1 * * * *",()=>{
    console.log("called at", new Date());
})
