const express   = require('express');
const mongoose  = require('mongoose');

const bcrypt    = require('bcrypt');
const jwt       = require('jsonwebtoken');


const register=(req,res,next)=>{

    bcrypt.hash(req.body.inputPassword1, 10, function(err, hashedpassword) {
        if(err){
            res.json({
                message:err,
            })
        }
        // Store hash in database
        console.log(hashedpassword);
        res.render('login')
      });

}

const login=(req,res,next)=>{

    const email=req.body.inputEmail;
    const password=req.body.inputPassword;

    console.log(email);
    console.log(password);

 if(email==="admin@gmail.com" && password==="admin"){
     res.render('admin.ejs')
 }

}

module.exports={
    register,login
};
