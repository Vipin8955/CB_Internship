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
const Vehicle=require('./models/vehicle.js');

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

const{isAuthenticated}=require('./middlewares/authentication.js');

const staticRouter=require('./routes/staticRouter');
app.use('/',staticRouter)
app.use('/login',require('./routes/loginRouter'));
app.use('/signup',require('./routes/signupRouter'));
app.use('/logout',staticRouter)
app.use('/profile',isAuthenticated,require('./routes/profileRouter'));
app.use('/booking',isAuthenticated,require('./routes/bookingRouter.js'));
app.use('/admin',isAuthenticated,require('./routes/adminRouter'));
mongoose.connect(process.env.DB_PATH).then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log("Server is running");
  });
})
