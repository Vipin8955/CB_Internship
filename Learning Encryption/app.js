const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const session = require('express-session');
const hbs=require('hbs');
const mongoose=require('mongoose');
const mongoStore=require('connect-mongo');
const flash=require('connect-flash');
const loginRouter=require('./routes/login');
const signupRouter=require('./routes/signup');
const profileRouter=require('./routes/profile');
require('dotenv').config();


app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(flash());
app.use(session({
    secret:process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store:mongoStore.create({mongoUrl:process.env.DB_PATH})
}));

app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/profile',profileRouter);

app.get('/',(req, res)=>{
    res.redirect('/login');
});
app.get('/logout',(req,res)=>{
    req.flash('msg',"Logged Out");
    req.session.destroy();
    res.redirect('/login');
})

mongoose.connect(process.env.DB_PATH).then(()=>{
    app.listen(8000,()=>{
    console.log("Server is Running");
})
});
