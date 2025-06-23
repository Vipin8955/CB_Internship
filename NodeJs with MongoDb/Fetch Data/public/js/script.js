const addtask=document.querySelector('#addtask');
const newtask=document.querySelector('#newtask');
let tasklist=document.querySelector('.taskList');

function deletetodo(atrid){
      axios.post('/deletetodo',{id:atrid})
.then((res)=>{
    let todos=res.data;
    console.log(todos);
    addToDom(todos);
}).catch((err)=>{
    console.log(err);
});
}

function addToDom(todos){
    tasklist.innerText='';
    todos.forEach(element => {
        let li=document.createElement('li');
        li.innerHTML=`
        <span class="taskname">${element.name}</span>
        <button atrid="${element.id}" class="upbtn">⬆️</button>
        <button atrid="${element.id}" class="downbtn">⬇️</button>
        <button atrid="${element.id}" class="deletebtn">❌</button>
        `
        tasklist.append(li);       
    });
}

addtask.addEventListener('click',(event)=>{
    event.preventDefault();
    
    axios.post('/addtodo',{
        name:newtask.value
    })
    .then((res)=>{
       let todos=res.data;
       newtask.value='';
       addToDom(todos);
    }).catch((err)=>{
        console.log(err);
    })});

axios.get('/gettodos').then((res)=>{
    let todos=res.data;
    addToDom(todos);
}).catch((err)=>{
    console.log(err);
});

tasklist.addEventListener('click',(event)=>{
    let atrid=event.target.getAttribute('atrid');
    let btnname=event.target.className;
    if(btnname=='deletebtn'){
     deletetodo(atrid);
    }
    else if(btnname=='upbtn')
    {
        axios.get(`/increasepriority?id=${atrid}`).then((res)=>{
            let todos=res.data;
            addToDom(todos);
        }).catch((err)=>{
            console.log(err);
        })
    }
    else if(btnname=='downbtn')
    {
        axios.get(`/decreasepriority?id=${atrid}`).then((res)=>{
            let todos=res.data;
            addToDom(todos);
        }).catch((err)=>{
            console.log(err);
        })
    }
});

