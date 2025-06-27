const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const session = require('express-session');
const hbs=require('hbs');
const mongoStore=require('connect-mongo');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'asdajbdkajsbd kakdabdhva vdasvdvasdv ahvd',
    resave: false,
    saveUninitialized: true,
    store:mongoStore.create({mongoUrl:'mongodb+srv://vipinchoudhary23cse:2224567@cluster0.tgmwf.mongodb.net/MongoStore?retryWrites=true&w=majority&appName=Cluster0'})
}));

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/signup',(req,res)=>{
    res.render('signup');
 })
app.get('/login',(req,res)=>{
    res.render('login');
 })


app.post('/signup',(req,res)=>{
    const{name,email,password}=req.body;
    req.session.name=name;
    req.session.password=password;
    req.session.email=email;
    res.redirect('/login');
})

app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    if(req.session.email===email&&req.session.password===password)
    {
        console.log("Logged In Successfully");
        return res.redirect('/profile');
    }
    res.redirect('/login');
})
app.get('/profile',(req,res)=>{
    if(req.session.name){
        res.render('profile',{
        name:req.session.name,
        password:req.session.password 
    });
    }
    else{
        res.redirect('/login');
    }
})
app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login');
})


app.listen(8000,()=>{
    console.log("Server is Running");
})