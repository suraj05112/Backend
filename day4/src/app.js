const express = require("express");
const app = express();
app.use(express.json());
const notes = [
  {  "title":"test 1", "descrption":" test 2"}
];

app.get("/", (req, res) => { 
  res.send("Hello World!");
});

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  console.log(notes);
res.send("notes cretae");
});
app.get("/notes",(req,res)=>{
    res.send(notes);
});
app.delete("/notes/:index",(req,res)=>{
// console.log(req.params.index)
delete notes[req.params.index]
res.send("notes data sucessfully delete");
})

app.patch("notes/:index",(req,res)=>{
  notes[req.params.index].descrption=req.body.descrption
  res.send("updates is th esucesfully");

})
module.exports = app;
