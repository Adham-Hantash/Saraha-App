import joi from "joi";

export const signupSchema = 
{
    body:joi.object({
        userName:joi.string().alphanum().required(),
        email:joi.string().email().required(),
        password:joi.string().required(),
        cPassword:joi.string().valid(joi.ref('password')).required()
    }).required(),

    query:joi.object({
        test:joi.boolean().required(),
    }).required(),
}



export const loginSchema = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required(),
}).required();