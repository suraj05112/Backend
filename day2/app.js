const express=require("express")
const app=express()// server createkar chuke ho
app.get('/',(req,res)=>{
    res.send("Hello Word");

})
app.get("/about",(req,res)=>{
    res.send("This is the aboutpaga");
})
app.get('/home',(req,res)=>{
    res.send("this is the home page");
})
app.listen(3000)// server ko start karte hia
