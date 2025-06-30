module.exports=(socket,io,userMap)=>{socket.on("disconnect",()=>{
    let socketId=socket.id;
    let username=userMap[socketId];
    if(username)
    {
        delete userMap[socketId];
        let activeUsers=[];
        for(let key in userMap)
        {
            activeUsers.push(userMap[key]);
        }
        socket.broadcast.emit('disconnectedUser',{
        username,
        activeUsers
    })
    }
})}