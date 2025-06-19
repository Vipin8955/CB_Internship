
const Todo=require('../database/script/databse');
module.exports.getgettodos=(req,res)=>{
    
    Todo.getTodos().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send(`'Unable to fetch todos,${err.message}`);
    })
}
module.exports.postaddtodo=(req,res)=>{
    const{name}=req.body;
    if (!name || name.trim() === '')
    {
       return res.status(400).send("Task name required");
    }
    Todo.addTodo(name).then((msg)=>{
        console.log(msg);
        res.redirect('/gettodos');
    }).catch((err)=>{
        console.log(err.message);
    });
    
}
module.exports.postdeletetodo=(req,res)=>{
    const{id}=req.body;
    Todo.deleteTodo(id).then(()=>{
        res.redirect('/gettodos')
    }).catch((err)=>{
        res.status(500).send(`Unable to delete the task: ${err.message}`);
    });
}
module.exports.getincreasepriority=(req,res)=>{
    const{id}=req.query;
   Todo.increasepriority(id).then(()=>{
    res.redirect('/gettodos');
   }).catch((err)=>{
    res.send(`Unable to increase priority of the task, ${err.message}`);
   });
}
module.exports.getdecreasepriority=(req,res)=>{
    const{id}=req.query;
    Todo.decreasepriority(id).then(()=>{
    res.redirect('/gettodos');
   }).catch((err)=>{
    res.send(`Unable to decrease priority of the task, ${err.message}`);
   });
    
}