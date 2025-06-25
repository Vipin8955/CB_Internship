const express=require('express');
const app=express();
const mongoose=require('mongoose');
const{connectMongoDb}=require('./config/connection');
const PORT=8000;
const path=require('path');
const hbs=require('hbs');



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','hbs');
app.use(express.static('public'));
const partialsPath = path.join(__dirname, 'views', 'partials');

hbs.registerPartials(partialsPath);

const{blogsRouter}=require('./route/blogsRouter');

app.use('/',blogsRouter);


connectMongoDb('mongodb+srv://vipinchoudhary23cse:2224567@cluster0.tgmwf.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("MongoDb connected successfully");
    app.listen(PORT,()=>{
        console.log("Server is Running at port:",PORT);
    })
}).catch((err)=>{
    console.log("Could not connect:",err.message);
});

