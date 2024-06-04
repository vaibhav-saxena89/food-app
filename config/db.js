const mongoose=require("mongoose");
const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB is connected");

    }
    catch(error){
        console.log("error",error);
    }
};
module.exports=connectDb;