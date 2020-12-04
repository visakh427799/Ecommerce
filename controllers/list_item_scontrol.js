const express=require('express');

const Item=require('../model/Item_model');

const List_items=(req,res,next)=>{

    Item.find({},(err,Alldata)=>{

        if(err){
                console.log(err)
        }
        else{
             res.render('Home.ejs',{data:Alldata});
        }
    })
}
module.exports={
    List_items
};