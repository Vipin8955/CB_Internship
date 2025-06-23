const express=require('express');
const app=express();
const {mongoConnect}=require('./database/database');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/',require('./routes/todo'));
const PORT=8000;
mongoConnect().then(()=>{
    console.log('Connected successfully to server');
    app.listen(PORT,()=>{
        console.log("Server is Running at port:",PORT);
    })
}).catch((err)=>{
    console.log("Cannot connect:",err);
});