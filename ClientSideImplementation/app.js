const express=require('express');
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
const methodOverride=require('method-override');
app.use(methodOverride('_method'));
let students=[
    {id:1,name:"Vipin"},
    {id:2,name:"Rahul"},
    {id:3,name:"Lokesh"}
]
app.get('/',(req,res)=>{
    res.render('./index.html');
});
app.get('/students',(req,res)=>{
    res.send(students);
});
app.get('/students/:id',(req,res)=>{
     let id=parseInt(req.params.id);
     let s=students.find((student)=>{
        return student.id==id;
     });
     if(!s)
     {
        res.send("student Not found");
     }
     else
     {
        res.send(s);
     }
});
app.put('/students/:id',(req,res)=>{
    let id=parseInt(req.params.id);
    let name=req.body.name;
    students=students.map((student)=>{
        if(student.id==id)
        {
            student.name=name;
        }
        return student;
    });
    res.send(students);
});
app.delete('/students/:id',(req,res)=>{
    let id=parseInt(req.params.id);
   students=students.filter((student)=>{
    if(student.id==id)
    {
        return false;
    }
    return true;
   });
   res.send(students);
});
app.listen(8000,()=>{
    console.log("Server is Running");
});