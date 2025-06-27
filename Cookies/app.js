const express=require('express');
const PORT=8000;
const app=express();
const cookie=require('cookie');
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
   let cookies=cookie.parse(req.headers.cookie||'');
   if(cookies.loggedIn){
    return res.redirect('/profile');
   }
    res.redirect('/login');
}
);

app.get('/login',(req,res)=>{
    let cookies=cookie.parse(req.headers.cookie||'');
    if(cookies.loggedIn){
     return res.redirect('/profile');
   }
    res.setHeader('Set-Cookie',cookie.serialize('loggedIn',true,{
        maxAge:10
    }));
    res.send("here is your login page");
})

app.get('/profile',(req,res)=>{
   let cookies=cookie.parse(req.headers.cookie||'');
   if(cookies.loggedIn){
    return res.send('Welcome to my application');
   }
    res.redirect('/login');
}
);


app.listen(PORT,()=>{
    console.log("Server is Running On Port:",PORT);
});
