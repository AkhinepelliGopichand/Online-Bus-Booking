const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    mobile:String,
    password:String,
    DOB:String,
    gender:String

})

module.exports=mongoose.model('user',userSchema,'users')