const express=require('express')
const app=express();
const cors=require('cors')
const dotenv=require('dotenv');
const chats = require('./Data/Data');


const port=process.env.PORT;
app.use(cors())

app.listen(7000,(req,res)=>{
    console.log("COnnected")
})

app.get('/chats',(req,res)=>{
    res.send(chats)
})
app.get('/chats/:id',(req,res)=>{
    console.log(req)
})
