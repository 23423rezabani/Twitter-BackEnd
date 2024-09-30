import mongoose from "mongoose";
import { Schema } from "mongoose";


const emailVerificationSchema = Schema({
    userId:String,
    token:String,
    createdAt:Date,
    expiresAt:Date
})

const Verification = mongoose.model('verification',emailVerificationSchema);

export default Verification;