import mongoose from "mongoose";
import { Schema } from "mongoose";

const PasswordResetSchema = Schema({
    userId:{type:String,unique:true},
    email:{type:String,unique:true},
    token:String,
    createdAt:Date,
    expiresAt:Date,
});

const PasswordReset = mongoose.Model('PasswordReset',PasswordReset);

export default PasswordReset;


