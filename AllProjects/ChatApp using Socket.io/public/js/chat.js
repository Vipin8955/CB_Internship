const socket=io();  

const btn=document.querySelector('#btn');
const btn1=document.querySelector('#btn1');
const chatbox=document.querySelector('#chatbox');
const chattingApp=document.querySelector('.chattingApp');
const userDetails=document.querySelector('.userDetails');
const username=document.querySelector('#username');
const msgList=document.querySelector('.msgList');
let activeUserList=document.querySelector(".activeUserList");


msgList.classList.add('hide');
chattingApp.classList.add('hide');

btn1.addEventListener('click',()=>{
    const name=username.value.trim();
    if (name==='')return alert("Please enter a username");
    socket.emit('saveuser',{ username: name });
    chattingApp.classList.remove('hide');
    userDetails.classList.add('hide');
    msgList.classList.remove('hide');
});


function updateActiveUsers(activeUsers)
{
    activeUserList.innerHTML='';
    let ul=document.createElement('ul');
    activeUsers.forEach(user => {
        let li=document.createElement('li');
        li.innerText=user;
        ul.appendChild(li);
    });
    activeUserList.appendChild(ul);
}
socket.on('msg',(msg)=>{
    const text=msg.text;
    const senderName=msg.senderName;    
    const li=document.createElement('li');
    li.innerHTML=`
    <span class="chatItem">
        <span class="senderName">${senderName}</span>
        <span class="textDetails">${text}</span>
    </span>
    `
    msgList.appendChild(li);
});
socket.on('disconnectedUser',(msg)=>{
    console.log("Hello");
    console.log(`${msg.username} has left the chat, current active users ${msg.activeUsers}`);
    updateActiveUsers(msg.activeUsers);
})
socket.on('joinedUser',(msg)=>{
    console.log(`${msg.username} joined the chat, current active users ${msg.activeUsers}`);
    updateActiveUsers(msg.activeUsers);
})

btn.addEventListener('click',()=>{
    const message=chatbox.value;
    if (message === '') return;
    socket.emit('chat',message,(res) => {
        console.log(res.status);
    });
    chatbox.value = '';
});
