import messageModel from "../../../../DB/models/message.model.js";
import userModel from "../../../../DB/models/user.model.js";

export const sendMessage = async (req,res) =>{
    const {receiverId} = req.params;
    const {message} = req.body;

     const user = await userModel.findById(receiverId);
     if(!user){
        return res.status(404).json({message: 'Not Found'});
     }

     const createmessage = await messageModel.create({receiverId,message})
     return res.status(201).json({message: 'Success', createmessage});

}

export const getMessage = async (req,res)=>{
    const messageList = await messageModel.find({receiverId:req.id})
    return res.json({message:"Success", messageList})
}


export const deleteMessage = async (req,res) =>{
    const id = req.id
    const {messageId} = req.params

    const message = await messageModel.deleteOne({_id:messageId,receiverId:id})
    if(message.deletedCount == 0){
        return res.json({message:"Invalid Message"})
    }
    return res.json({message:"Message Deleted"})

}
