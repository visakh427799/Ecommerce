const express=require('express');
const mongoose=require('mongoose');

const uri = "mongodb+srv://visakhts:427799@cluster0.70uir.mongodb.net/<Ecommerse>?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…")
})
.catch(err => console.log(err));

