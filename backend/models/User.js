const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,//datatype
    },
    email:{
        type:String,
        required:true,//must have means you can give 
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Users',userSchema)
