import mongoose from "mongoose";
import verifyEmail from "../Routes/userRoutes.js";
import Users from "../models/userModel.js";
import Verification from "../models/emailVerification.js";

export const verifyEmail = async (req,res) => {
 const {userId,token} = req.params;

try{
    const result = await Verification.findOne({userId});

    if(result){
     const  { expiresAt,token:hashedToken} = result;

     if(expiresAt < Date.now()){
      await Verification.findOneAndDelete({userId})
      .then(()=>{
        Users.findOneAndDelete({_id:userId})
        .then(()=>{
          const massage = 'verification token has expired';
          res.redirect(`users/verified/status=error&massage=${massage}`) 

        })
        .catch((err)=>{
            res.redirect(`users/verified/status=error&massage=`) 

        })
      })
     }
    }

}catch(err) {
    console.log(err)
 res.status(404).json({massage:err.massage});
}

}
