const express = require("express");

const app = express();


app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message:"notes create successfully"
    })

    
});

app.get('/notes',(req,res)=>{
    res.status(200).json({
        notes:notes
    })
})
app.delete('./notes/:mama',(req,res)=>{
    delete notes[req.params.mama]
    res.status(204).json({
        message:"notes delete in the susscessfully"
    })
})
module.exports = app;
