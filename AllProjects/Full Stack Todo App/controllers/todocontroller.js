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
    const {id}=req.body;
    Todo.deleteTodo(id).then((msg)=>{
        console.log(msg);
        res.redirect('/gettodos');
    }).catch((err)=>{
       res.status(500).send([]);

    })
}
module.exports.getincreasepriority=(req,res)=>{
    const {id}=req.query;
    Todo.increasePriority(id).then((msg)=>{
        console.log(msg);
        res.redirect('/gettodos');
    }).catch((err)=>{
        res.send(`Could not increase priority of the todo ${err.message}`);
    })
}

module.exports.getdecreasepriority=(req,res)=>{
    const {id}=req.query;
    Todo.decreasePriority(id).then((msg)=>{
        console.log(msg);
        res.redirect('/gettodos');
    }).catch((err)=>{
        res.send(`Could not decrease priority of the todo ${err.message}`);
    })
}
