const express = require("express");
const usermodel = require("../models/user.model"); 
const jwt=require("jsonwebtoken")

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
    const { email, password, name } = req.body;

    const isuseralreadyexists=await usermodel.findOne({email})
    if(isuseralreadyexists){
        return res.status(400).json({
            message:"user already exits with this email address"
        })
    }

    const user = await usermodel.create({   
        email,
        password,
        name
    });
    const token= jwt.sign({
        id:user._id ,
        email:user.email

    },
    process.env.JWT_SECRET
)
res.cookie("jwt_token",token)

    res.status(201).json({
        message: "User registered",
        user,
        token
    });
});

module.exports = authRouter;