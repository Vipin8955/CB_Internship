let userMap={};
module.exports=
    (socket,io)=>{
    console.log("Connection requested by a client with id:",socket.id)
    socket.emit('vipin',{
    msg:"Lord Septonic🎀"
});

const userHandler=require('../handlers/userHandler');
userHandler(socket,io,userMap);

const disconnectHandler=require('../handlers/disconnectHandler');
disconnectHandler(socket,io,userMap);

const chatHandler=require('../handlers/chatHandler');
chatHandler(socket,io,userMap);
}
