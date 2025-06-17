const express=require('express');
const app=express();
const path=require('path');

app.get('/file',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));//__dirname provides the current directory path
});

app.get('/server.js',(req,res)=>{
    res.send(`console.log('Hello Hello')`);//As we included a script tag in the index.html a req will be made at /server.js to get it thus we will be handling it here
});

app.listen(8000,()=>{
    console.log("Server is Running");
});