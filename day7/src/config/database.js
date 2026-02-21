const mongoose=require("mongoose");
 function connectTODb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        console.log("connection to the db");
    })
 }
 module.exports=connectTODb;