const express=require('express');
const app=express();

function m1(req,res,next){
    console.log("m1 is Running");
    next();
}
function m2(req,res,next){
    console.log("m2 is Running");
    next();
}
function m3(req,res,next){
    console.log("m3 is Running");
    next();
}

app.use(m1);
app.use(m2);
app.use(m3);

app.get('/',(req,res)=>{
    res.end("Hello");
})

app.listen(8000,(err)=>{
    console.log("server is Running!!!");
})