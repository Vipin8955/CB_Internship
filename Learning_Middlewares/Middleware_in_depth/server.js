const express=require('express');
const app=express();

function m1(req,res,next){
    console.log(" Pre m1 is Running");
    next();
    console.log(" Post m1 is Running");
}
function m2(req,res,next){
    console.log(" Pre m2 is Running");
    next();
    console.log(" Post m2 is Running");
}
function m3(req,res,next){
    console.log(" Pre m3 is Running");
    next();
    console.log(" Post m3 is Running");
}

// app.use(m1);
// app.use(m2);
// app.use(m3);

app.get('/',m1,m2,m3,(req,res)=>{
    console.log("Pre sending response");
    res.end("Hello");
     console.log("Post sending response");
})

app.listen(8000,(err)=>{
    console.log("server is Running!!!");
})