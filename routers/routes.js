const express=require('express');
      router=express.Router();
      mongoose=require('mongoose')

const Register =require('../model/Register_user_model');//importing the RegisterSchema model
const Reg      =require('../controllers/registercontrol');
const Items=require('../controllers/itemadd_control');
const List=require('../controllers/list_item_scontrol');



router.get('/',List.List_items);

router.get('/register',(req,res)=>{
    res.render('Register.ejs')
     
   });
router.get('/login',(req,res)=>{
      res.render('login.ejs')
       
     });
router.post('/register',Reg.register);

router.post('/login',Reg.login);
router.post('/additems',Items.Item_add);




module.exports=router;