const Signup = require("../modal/signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = "honey" 

const Signups = async(req,res)=>{
    const{name,email,password}=req.body;
    try {
        const sign = await Signup.findOne({email:email,password:password});
        const hashpassword = await bcrypt.hash(password,10);
        if(sign){
            res.status(400).json({message:"user already exists"});
        }else{
            const user = await Signup.create({
                name,
                email,
                password:hashpassword,
            })
            if(user){
                res.status(200).json({message:"user registered successfully"});
                console.log("Registration sucess");
            }
                else{
                    res.status(400).json({message:"error while registration"});
                }
            }
        } catch (error) {
            console.log(error)
        
    }
};
const Login =async (req,res)=>{
    const{email,password}=req.body;
    try {
        const Login = await Signup.findOne({email:email});
        
        if(!log || !bcrypt.compare(password,log.password))
            res.status(200).json({message:"user already exist"})
        else{
            
            const token = await jwt.sign({userId:id},secret,{
            expiresIn: "30h"
        });
            
                    res.status(400).json({message:"incorrect email or password",token});
                    console.log(token);

                }
        }catch (error){
            console.log(error);
        }
};



module.exports = {Signups, Login};