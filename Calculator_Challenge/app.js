const express=require('express');
const hbs=require('hbs');
const app=express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs');
let number1;
let number2;
app.get('/',(req,res)=>{
    res.render('index.hbs',{result:null});
});

app.post('/calculate',(req,res)=>{
    number1=parseFloat(req.body.number1);
    number2=parseFloat(req.body.number2);
    const result = {
        sum: number1 + number2,
        product: number1 * number2,
        divide: number2 !== 0 ? (number1 / number2).toFixed(2) : 'Infinity'
    };

    res.render('index', { result });
    
});

app.listen(8000,(err)=>{
    console.log("Server is Running");
});