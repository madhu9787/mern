const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const user=require('../models/User')
const User = require('../models/User')
exports.register=async(req,res)=>{
    const{name,email,password}=req.body
    const existingUser=await User.findOne({email})//await is used to wait for the promise to resolve
    if(existingUser){
         res.status(400).json({message:"email already existing"})
    }
    const hashedPassword=await bcrypt.hash(password,10)//bcryt is used to hash the password with 2 power 10 rounds
    const user=await User.create({
        name,
        email,
        password:hashedPassword
    })
    res.status(201).json({msg:"user created successfully"})
}
exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const existingUser=await User.findOne({email})
        if(!existingUser){
            res.status(400).send("email not registered")
        }
        const isMatching=await bcrypt.compare(password,existingUser.password)
        if(!isMatching){
            res.status(400).send("invalid credentials")
        }
       const token=jwt.sign(
        {id:existingUser._id},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

        
       
        //res.status(200).send("login successful")
          res.send(token)
    }
    catch(error){
        res.status(500).send(error)
    }
}