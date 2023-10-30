import connectDB from '../../DB/connection.js';
import authRouter from './Auth/auth.router.js';
import userRouter from './User/user.router.js';
import messageRouter from './Message/message.router.js';

const initApp = (app,express)=>{
    connectDB();
    app.use(express.json());
    app.use('/auth',authRouter);
    app.use('/user',userRouter);
    app.use('/message',messageRouter);
    app.use('*',(req,res)=>{
        return res.json({message:"Page not found"});
    })
}

export default initApp;