const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const connectDb = require("./config/db");
const app=express();
dotenv.config();

connectDb();
app.use(express.json());
app.use(cors());
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth",require("./routes/authRoutes"));
app.use("/api/v1/user",require("./routes/userRoutes"));
app.get('/',(req,res)=>{
    res.status(200).send("hi");
})
let PORT=5000;
app.listen(PORT,()=>{
    console.log("server is runing");

})