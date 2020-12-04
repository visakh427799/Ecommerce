const express=require('express');
const mongoose  = require('mongoose');
const Item=require('../model/Item_model');
const Item_add=(req,res,next)=>{


    console.log(typeof  req.body.inputPrize)
    const prize=Number(req.body.inputPrize);
    console.log(typeof prize)
        const data={

            itm_name:req.body.inputName,
            itm_prize:prize,
            itm_image:req.body.inputImg,
            itm_category:req.body.inputCategory,
            itm_description:req.body.inputDesc,
            itm_Availability:true,
        }

        console.log(data);
Item.create(data,function(err,dat){

    if(err){
        res.json({
            message:err
        })
    }
    else{
        console.log("Itm added"+dat);
        res.render('admin.ejs');
    }

}); 
    

}



module.exports={
    Item_add
}