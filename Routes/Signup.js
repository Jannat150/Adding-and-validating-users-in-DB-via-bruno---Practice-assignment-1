const express=require('express')
const Signup=express.Router()
const Schema=require('../models/userSchema')
const bcrypt=require('bcrypt')

Signup.post('/post',async(req,res)=>{
    try{
    const {username,email,password}=req.body
    const hashedPassword= await bcrypt.hash(password, 10)
    const user=await Schema.create({
        username,email,password:hashedPassword
    })
    if (user){
        return res.status(200).json({"message":"User created Successfully", user})
    }
    else{
        return res.status(404).json({"Error":"Error came"})
    }
}catch(error){
    console.log(error)
}
})

module.exports=Signup