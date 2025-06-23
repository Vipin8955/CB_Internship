const Todo=require('../models/todo');

module.exports.getgettodos=(req,res)=>{
   Todo.getTodos().then((data)=>{
    res.send(data);
   }).catch((err)=>{
    console.log(err);
   });
}
module.exports.postaddtodo=(req,res)=>{
    const {name}=req.body;
    Todo.addTodo(name).then((msg)=>{
        console.log(msg);
        res.redirect('/gettodos');
    }).catch((err)=>{
        res.send('Could not add todo :',err);
    })
}
module.exports.postdeletetodo=(req,res)=>{
    
}
module.exports.getincreasepriority=(req,res)=>{
   
}
module.exports.getdecreasepriority=(req,res)=>{
    
}