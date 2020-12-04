const express=require('express');
const bdp    =require('body-parser');
const app=express();
const routers=require('./routers/routes')
const mongoose=require('mongoose');
const port=8000||process.env.PORT;
require('./dbconnection'); 
app.use(bdp.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('views','./views');
app.set('view engine','ejs');

app.use(routers);//we wrote all outes in another file export and use it in server.js file using app.use


app.listen(port,()=>{
   console.log("server started at "+port);
}) 

