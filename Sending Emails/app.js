const express=require('express');
const app=express();
const nodemailer=require('nodemailer');
const sgTransport=require('nodemailer-sendgrid-transport')
require('dotenv').config();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','hbs');

let options={
    auth:{
        api_key:process.env.API_KEY
    }
}
let mailer=nodemailer.createTransport(sgTransport(options));

app.get('/',(req,res)=>{
    res.render('index');
})
app.post('/signup',(req,res)=>{
    const {email}=req.body;
    mailer.sendMail({
    to:email,
    from:'vipinchoudhary797@gmail.com',
    subject:'Nothing',
    text:'Nothing Again',
    html:'<b>Hello</b>'
},(err,res)=>{
    if(err){
        console.log(err);
    }
    else
    console.log(res);
}) 
res.send("Ok");
})



app.listen(8000,()=>{
    console.log("Server is running");
})