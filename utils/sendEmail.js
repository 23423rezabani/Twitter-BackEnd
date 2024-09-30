import nodemailer from "nodemailer";
import Users from "../models/userModel.js";
import dotenv from "dotenv";
import {v4 as uuidv4} from "uuid";
import {hasstring} from "../utils/index.js";

dotenv.config();

const {AUTH_EMAIL,AUTH_PASSWORD,AUTH_URL} = process.env;

let transporter = nodemailer.createTransport({
    host:"smtp-mail.outlook.com",
    auth:{
        user:AUTH_EMAIL,
        pass:AUTH_PASSWORD,
    }
});

export const  sendVerificationEmail = async (user,res) =>{
  const {_id,email,lastName} = user;
  const token = _id + uuidv4();
  const link = AUTH_URL + "users/verify"+ _id + "/" + token;

  const  mailOption = {
     from:AUTH_EMAIL,
     to:email,
     subject:"EMAIL VERIFICATION",
     html:`<div><h1>hi${lastName}</h1></div>
     <div><h1>click the link and register${link}</h1></div>`
  };

  try{

    const hashedToken = await hasstring(token)

   const  newVerifiedEmail = await Verification.create({
    userId:_id,
    token:hashedToken,
    createdAt:Date.now(),
    expiresAt:Date.now()+360000,
   });

   if(newVerifiedEmail){
    transporter.sendMail(mailOption)
    .then(()=>{
      res.status(201).send({
        success:"PENDING",
        massage:'verification email has sent to your email'
      });
      
    })
   }

  }catch(err) {
   console.log(err);

   res.status(404).json({massage:"something went wrong"})

  }
  
}

