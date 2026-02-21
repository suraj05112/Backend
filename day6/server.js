const app=require('./src/app');
const mongoose= require("mongoose");
function connectToDb(){
    mongoose.connect("mongodb+srv://Suraj123:JMhfj2rleUZCIvan@cluster0.dfotwvk.mongodb.net/day6")
    .then(()=>{
        console.log("connected to database");

    })
}
connectToDb()

app.listen(3000,()=>{
    console.log("server is running on port 3000");

})