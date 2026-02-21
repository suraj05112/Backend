const mongoose= require("mongoose"); 

const notesSchema = new mongoose.Schema({
    tittle:String,
    descrption:String, 
})
 const notesmodel=mongoose.model("notes", notesSchema)

 module.exports=notesmodel