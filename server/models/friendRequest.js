import mongoose from "mongoose";
import { Schema } from "mongoose";


const friendRequestSchema = Schema({
  requestTo:{type:Schema.Types.ObjectId,ref:"Users"},
  requestFrom:{type:Schema.Types.ObjectId,ref:"Users"},
  requestStatus:{type:String,default:"Pending"},

},
{timestamps:true}
);

const FriendRequest = mongoose.Model("FriendRequest",friendRequestSchema);

export default FriendRequest;
