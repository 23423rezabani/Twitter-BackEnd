import User from "../models/userModel.js";
import { sendVerificationEmail } from '../utils/sendEmail.js';
import { hasstring } from "../utils/index.js";



export const  register = async(req,res,next) =>{
   const {firstName,lastName,email,password} = req.body;


   if(!firstName || lastName || email || password){
    next("provide required fields")
    return;
   }

  try{
  const Userexist = User.findOne({email});
  if(Userexist){
    next("email has already register ")
    return;
  }

  const HashPassword = await hasstring(password);

  const user = await User.create({
   firstName,
   lastName,
   email,
   password:HashPassword,

  })
   
  sendVerificationEmail(user,res);

  }catch(err) {
   console.log( err)
   res.status(404).send("regsiter has not succses")
  }
}

export const login = async(req,res,next)=>{
  const {email,password} = req.body;

try{
  const user = User.findOne({email}).select("+password").populate({
    path:"friends",
    select:"firstName lastName location profileUrl -password"
  });

  if(!user){
    next("email or password is wrong");
  }

  const isMatch = compareString(password,user?.password);

  if(!isMatch){
    next("email or password is wrong")
  }

   user.password = undefined;

  const token = createJWT(user?._id);

 res.status(201).json({
  success:true,
  massage:"login successfully",
  user,
  token,
 });
 
}catch(err) {
res.status(404).json({massage:err.massage})
}

}