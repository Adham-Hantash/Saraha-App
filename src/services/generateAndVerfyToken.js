import jwt from "jsonwebtoken";

export const generateToken = (payload,signature=process.env.TOKEN_SIGNNATURE,expiresIn='1h') =>{
    var token = jwt.sign(payload,signature,{expiresIn});
    return token
}

export const verifyToken = (token,signature=process.env.TOKEN_SIGNNATURE)=>{
    var decoded = jwt.verify(token,signature);
    return decoded
}