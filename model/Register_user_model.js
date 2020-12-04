const mongoose=require('mongoose');

var RegisterSchema=new mongoose.Schema({

      username:String,
      email:String,
      password:String,

})// created a schema /model for user registration model

module.exports=mongoose.model("Register",RegisterSchema); // creating and exporting the model for user registration its actually a collection