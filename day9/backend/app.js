 const express= require("express")
 const notemodel=require("./models/note.model")
  const app= express()

app.use(express.json())



app.post('/notes', async(req,res)=>{
    const{title,description}=req.body

const note=    await notemodel.create({
        title,description
    })
    res.status(201).json({
        message:"notes created successfully",
        note
    })
});
app.get("/api/notes", async(req,res)=>{
 const note= await  notemodel.find()
 res.status(200).json({
    message:"notes fetched successfully",
    note
 })
});
app.delete("/api/notes/:id",async(req,res)=>{
    const id= req.params.id
    await notemodel.findByIdAndDelete(id)
    res.status(200).json({
        message:"note delete is the successfully",
        
    })
});
app.patch("/api/notes/:id", async(req,res)=>{
    const id = req.params.id;   
    const { description } = req.body;

    await notemodel.findByIdAndUpdate(id, { description });

    res.status(200).json({
        message: "note updated successfully"  
    });
});


  module.exports=app