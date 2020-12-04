const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const Item_model=new Schema({

       itm_name:String,
       itm_prize:Number,
       itm_image:String,
       itm_category:String,
       itm_description:String,
       itm_Availability:Boolean,

})
const Item=mongoose.model('Item',Item_model);
module.exports=Item;