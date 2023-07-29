import userModel from "../../DB/models/user.model.js";
import { verifyToken } from "../services/generateAndVerfyToken.js";


export const auth = async (req, res, next) =>{
    const {authorization} = req.headers;
    if(!authorization?.startsWith(process.env.BEARER_TOKEN)){
        return res.json({message:"Invalid bearer key"})
    }
    const token = authorization.split(process.env.BEARER_TOKEN)[1];
    if(!token){
        return res.json({message:"Invalid token"})
    }
    const decoded = verifyToken(token)
    const checkUser = await userModel.findById(decoded.id)
    if(!checkUser){
        return res.json({message:"User not found"})
    }
    req.id = decoded.id
    next()
}