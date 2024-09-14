import User from "../models/userModel.js";


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