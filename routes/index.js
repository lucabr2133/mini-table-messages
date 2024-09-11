import { Router } from "express";
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
      id:0,
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
      id:1
    }
  ];

const routerIndex=Router()
routerIndex.get('/',(req,res)=>{
    res.render("index",{messages:messages})
})

routerIndex.get("/messages",(req,res)=>{
  const{id}=req.query
  res.render('message',{messages:messages[id]})  
})
export {routerIndex,messages}