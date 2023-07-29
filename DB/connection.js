import mongoose from "mongoose";


const connectDB = async ()=>{
   return await mongoose.connect(process.env.DB_LOCAL)
   .then(()=>{
    console.log("Database connection");
   }).catch((err)=>{
    console.log(`Error connecting to database ${err}`);
   });

}

export default connectDB;