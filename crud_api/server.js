const express = require('express');
const app = express();
const bookRouter = require("./routes/bookRouter")
const mongoose = require("mongoose");
const dotenv  = require("dotenv")

//middlewares
dotenv.config();
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use("/books",bookRouter);

//connecting database
try{
    mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected");
}catch(e){
    console.log(e);
}

//Server listener
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})