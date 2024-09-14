import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser());
app.use(helmet());
app.use(morgan());



const port = process.env.PORT || 8800

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
  app.listen(port,()=>console.log(`connect to server port ${port}`))
})
.catch((err)=>{
console.log(`${err} not conneted`)
})
