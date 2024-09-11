import { Router } from "express";
import { messages } from "./index.js";
const routerForm=Router()
routerForm.get('/',(req,res)=>{
    res.render("form")
})
routerForm.post('/',(req,res)=>{
    const  {message,user}=req.body
    messages.push({ text: message, user: user, added: new Date() });

    res.redirect("/")
})
export {routerForm}