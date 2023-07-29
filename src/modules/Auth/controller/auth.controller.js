import userModel from "../../../../DB/models/user.model.js";
import { compare, hash } from "../../../services/HashAndCompare.js";
import { generateToken } from "../../../services/generateAndVerfyToken.js";


export const signup = async (req,res)=>{
        const {userName,email,password} = req.body;
        console.log(userName,email,password);
    
        const user = await userModel.findOne({email});
        if(user){
            return res.json({message:"Email already exists"})
        }
        const hashPassword = hash(password);
        const createUser = await userModel.create({userName,email,password:hashPassword})
        return res.json({message:"user created successfully",user:createUser._id });

}

export const login = async (req,res)=>{
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({message:"Email does not exist"})
        }else{
            const match = compare(password,user.password)
        
        if(!match){
            return res.json({message:"Invalid Password"})
        }else{
            const token = generateToken({id:user._id})
            return res.json({message:"Signed in",token})
        }
    }
}