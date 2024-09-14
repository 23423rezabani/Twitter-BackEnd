import JWT from "jsonwebtoken";
import bcrypt, { genSalt } from "bcryptjs";

export const hasstring = async (useValue)=>{
const getsalt = await bcrypt.genSalt(10);

const HashPassword = await bcrypt.hash(useValue,getsalt);

return HashPassword
}


export const compareString =async (userPassword,password) =>{
  const isMatch = await bcrypt.compare(userPassword,password);
  return isMatch;

}

export function createJWT (id) {
 return JWT.sign({userId:id},process.env.JWT_SECRET_KEY,{expiresIn:'1d'})
 
}