const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.end(`Hello, your id is:${req.query.id}`);
});

app.get('/:name',(req,res)=>{
     res.end(`Hello ${req.params.name}`);
});



app.listen(8000,(err)=>{
 console.log("Server is running");
});