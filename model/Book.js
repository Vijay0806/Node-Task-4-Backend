const mongoose=require("mongoose");


const BookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        min:3,
        max:34,
    },
    description:{
        type:String,
        min:3,
        max:34,
    }
});

module.exports=mongoose.model("books",BookSchema);