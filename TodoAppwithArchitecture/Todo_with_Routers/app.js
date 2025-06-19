const express=require('express');
const app=express();



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));



app.use('/',require('./routes/todo'));

app.listen(8000,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    console.log("Server is Running");
})