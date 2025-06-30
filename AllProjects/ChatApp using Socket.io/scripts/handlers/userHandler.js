module.exports=(socket,io,userMap)=>{
    socket.on('saveuser',(res)=>{
    userMap[socket.id]=res.username;
      let activeUsers=[];
        for(let key in userMap)
        {
            activeUsers.push(userMap[key]);
        }
    socket.broadcast.emit('joinedUser',{
        username:userMap[socket.id],
        activeUsers
    })
})
socket.on('thankyou',(text,cb)=>{
    console.log(text);
    cb({status:"ok"});
})
}