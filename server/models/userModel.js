import mongoose  from "mongoose";
import { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, 'first Name is required']
    },
    lastName:{
        type:String,
        required:[true, 'last Name is required']
    },
    email:{
        type:String,
        required:[true, 'Wmail is required'],
        unique:true,
    },
    password:{
        type:String,
        required:[true, 'password is required'],
        minlenght:[6,'password length should be greater than 6 character'],
        select:true,
    },
    location:{type:String},
    profileUrl: {type:String},
    proffesion: {type:String},
    friends:[{type: Schema.Types.ObjectId, ref:'Users'}],
    views:{type:String},
    verified:{type:Boolean,default:false},
})

const Users = mongoose.model('Users',userSchema);

export default Users;
