const path=require('path');
const express=require('express');
const app=express();
const session=require('express-session');
const mongoose=require('mongoose');
require('dotenv').config();
const flash=require('connect-flash');
const passport=require('./auth/passport');
const mongoStore=require('connect-mongo');
const hbs=require('hbs');

app.use(flash());
app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(session({
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:true,
    store:mongoStore.create({
      mongoUrl:process.env.DB_PATH
    })
}));
app.use(passport.initialize());
app.use(passport.session());
hbs.registerPartials(path.join(__dirname, '/views/partials'));


app.get('/',(req,res)=>{
  res.redirect('/login');
})
app.use('/login',require('./routes/loginRouter'));
app.use('/signup',require('./routes/signupRouter'));
app.get('/logout',function(req,res,next){
  req.logout(function(err){
    if(err) return next(err);
    res.redirect('/login');
  })
})
app.use('/profile',require('./routes/profileRouter'));
app.get('/home',(req,res)=>{
    res.render('home');
})
app.get('/about',(req,res)=>{
  res.render('about');
})
app.get('/vehicles',(req,res)=>{
  res.render('vehicles');
})
app.get('/addvehicle',(req,res)=>{
  res.render('addvehicle');
})
app.use('/discovervehicles',require('./routes/staticRouter'));

app.use('/admin',require('./routes/adminRouter'));
mongoose.connect(process.env.DB_PATH).then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log("Server is running");
  });
})
