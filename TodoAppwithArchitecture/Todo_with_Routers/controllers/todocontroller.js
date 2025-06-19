
let todos=[];
const{v4:uuidv4}=require('uuid');
module.exports.getgettodos=(req,res)=>{
    res.send(todos);
}
module.exports.postaddtodo=(req,res)=>{
    const{name}=req.body;
    if (!name || name.trim() === '')
    {
       return res.status(400).send("Task name required");
    }
    
    todos.push(
        {
            id:uuidv4(),
            name
        }
    );
    res.send(todos);
}
module.exports.postdeletetodo=(req,res)=>{
    const{id}=req.body;
    todos=todos.filter((task)=>{
        if(task.id==id) return false;
        return true;
    });
    res.send(todos);
}
module.exports.getincreasepriority=(req,res)=>{
    const{id}=req.query;
    let indx = todos.findIndex(task => task.id == id);
    let temp=todos[indx];
    todos[indx]=todos[indx-1];
    todos[indx-1]=temp;
    res.send(todos);
}
module.exports.getdecreasepriority=(req,res)=>{
    const{id}=req.query;
    let indx = todos.findIndex(task => task.id == id);
    let temp=todos[indx];
    todos[indx]=todos[indx+1];
    todos[indx+1]=temp;
    res.send(todos);
}