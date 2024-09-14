import mongoose from "mongoose";
import { Schema } from "mongoose";


const postSchema = new mongoose.Schema({
    userId:{Type:Schema.Types.ObjectId,ref:"Users"},
    description:{type:String,required:true},
    Image:{type:String},
    likes:{type:String},
    Comment:[{type:Schema.Types.ObjectId,ref:"comments"}],

},
{timestamps: true }
)

const Posts = mongoose.model('Posts',postSchema);

export default Posts;
