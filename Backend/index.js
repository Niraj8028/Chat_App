const express=require('express')
const app=express();
const dotenv=require('dotenv')

const port=process.env.PORT;

app.listen(port,(req,res)=>{
    console.log("COnnected")
})

app.get('/',(req,res)=>{
    res.send("Hiidad")
})