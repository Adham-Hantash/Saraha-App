import mongoose from "mongoose";
import { Schema,model } from "mongoose";

const userSchema = new Schema({
    userName:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true
    },
    password:{
        type: 'string',
        required: true 
    },
    confirmPassword:{
        type: 'boolean',
        default: false
    },
    profilePicture:{
        type: 'string'
    }
},
{
    timestamp:true
});

const userModel = mongoose.models.User || model('User',userSchema);
export default userModel;