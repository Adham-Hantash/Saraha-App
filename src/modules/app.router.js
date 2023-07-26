import connectDB from '../../DB/connection.js';
import authRouter from './Auth/auth.router.js';

const initApp = (app,express)=>{
    connectDB();
    app.use(express.json());
    app.use('/auth',authRouter);
    app.use('*',(req,res)=>{
        return res.json({message:"Page not found"});
    })
}

export default initApp;