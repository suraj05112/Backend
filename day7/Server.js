require("dotenv").config()
const mongoose=require("mongoose")
const connectTODb=require("./src/config/database");
const app=require("./src/app")

 
 connectTODb();  

app.listen(3000,()=>{
    console.log("server start in the 3000 port");
})