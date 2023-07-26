import mongoose from "mongoose";
import { Schema,model,Types } from "mongoose";

const messageSchema = new Schema({
    message:{
        type: 'string',
        required: true
    },

    receiverId:{
        type: Types.ObjectId,
        required: true
    }
},
{
    timestamp:true
});

const messageModel = mongoose.models.Message || model('Message',messageSchema);
export default messageModel;