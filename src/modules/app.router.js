import connectDB from '../../DB/connection.js';
import authRouter from './Auth/auth.router.js';
import userRouter from './User/user.router.js';

const initApp = (app,express)=>{
    connectDB();
    app.use(express.json());
    app.use('/auth',authRouter);
    app.use('/user',userRouter);
    app.use('*',(req,res)=>{
        return res.json({message:"Page not found"});
    })
}

export default initApp;