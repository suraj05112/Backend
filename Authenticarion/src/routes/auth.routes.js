const express = require("express");
const authRouter = express.Router();
const usermodel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

authRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check user exists
    const isuserexits = await usermodel.findOne({ email });

    if (isuserexits) {
      return res.status(400).json({
        message: "user already exists"
      });
    }

    // create user
    const user = await usermodel.create({
      name,
      email,
      password: crypto
        .createHash("sha256")
        .update(password)
        .digest("hex")
    });

    // generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token);

    res.status(201).json({
      message: "user registered successfully",
      user: {
        name: user.name,
        email: user.email
      },
      token
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});
authRouter.get('/get-me',async(req,res)=>{
  const token=req.cookies.token;
 const decoded= jwt.verify(token,process.env.JWT_SECRET)
 const user=await user.usermodel.findById(decoded.id )
 res.json({
  name:user.name,
  email:user.email
 })

})

module.exports = authRouter;