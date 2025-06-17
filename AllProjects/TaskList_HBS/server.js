const express=require('express');
const hbs=require('hbs');
const app=express();

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
let tasklist=[];
app.get('/',(req,res)=>{
    res.render('index.hbs',{
        tasklist
    });
});

app.post('/addtask',(req,res)=>{
    tasklist.push(req.body.task);
    res.redirect('/');
});

app.listen(8000,(error)=>{
    console.log("Server is Running");
});