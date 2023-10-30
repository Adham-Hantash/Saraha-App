import userModel from "../../../../DB/models/user.model.js";
import { compare, hash } from "../../../services/HashAndCompare.js";
import { generateToken, verifyToken } from "../../../services/generateAndVerfyToken.js";
import { sendEmail } from "../../../services/sendEmail.js";
import { loginSchema, signupSchema } from "../Auth.validation.js";


export const signup = async (req,res)=>{

        const {userName,email,password,cPassword} = req.body;
    
        const user = await userModel.findOne({email});
        if(user){
            return res.json({message:"Email already exists"})
        }
        const hashPassword = hash(password);
        const token = generateToken({email},process.env.Email_SIGNNATUR)
        const link = `https://localhost:3000/auth/confirmEmail/${token}`
        await sendEmail(email,'Confirm Email',`<a href='${link}'>Verify Your Email</a>`)
        const createUser = await userModel.create({userName,email,password:hashPassword})
        return res.json({message:"user created successfully",user:createUser._id });
}


export const confirmEmail = async (req, res) =>{
    const {token} = req.params;
    const decoded = verifyToken(token,process.env.Email_SIGNNATUR)
    // if(!decoded){
    //     return res.json({message:"Invalid token"})
    // }
    const user = await userModel.updateOne({email:decoded.email},{confirmEmail:true})
    return res.json({message:"Your email has been confirmed"})
}


export const login = async (req,res)=>{

        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({message:"Email does not exist"})
        }else{
            if(!user.confirmPassword){
                return res.json({message:"Please verify your email"})
            }
            const match = compare(password,user.password)
        
        if(!match){
            return res.json({message:"Invalid Password"})
        }else{
            const token = generateToken({id:user._id})
            return res.json({message:"Signed in",token})
        }
    }
}