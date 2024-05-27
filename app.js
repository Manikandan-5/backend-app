const express=require('express');
const app=express()
const mongoose=require('mongoose')
require('dotenv/config');

const products=require('./routes/product')
const orders=require('./routes/order')

app.use(express.json())
app.use("/api/v1/",products)
app.use("/api/v1/",orders);

app.listen(process.env.PORT,()=>{
    console.log("Localhost Connected");
})
mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("MongoDB Connected Succesfully!!");
}).catch((err)=>{
    console.log(err.message);
})
