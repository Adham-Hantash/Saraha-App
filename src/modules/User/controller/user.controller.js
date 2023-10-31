import userModel from "../../../../DB/models/user.model.js";
import cloudinary from "../../../services/cloudinary.js";

export const profile = (req,res)=>{
    return res.json({message:"profile"})
}

export const profilePicture = async (req,res)=>{

    if(!req.file){
        return res.json({message:"File is requred"});
    }

    const {secure_url} = await cloudinary.uploader.upload(req.file.path,{folder:`saraha/user/${req.id}`})

    const user = await userModel.updateOne({_id:req.id},{profilePicture:secure_url}) 
    return res.status(200).json({message:"profile picture updated"});
}