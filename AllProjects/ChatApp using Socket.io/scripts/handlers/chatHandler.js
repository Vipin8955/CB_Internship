module.exports=(socket,io,userMap)=>{
    socket.on('chat',(msg,cb)=>{
    cb({status:"Chat received"});
    io.emit('msg',{
    text:msg,
    senderName:userMap[socket.id]
});
// Now your msg will not be visible to yourself 
//  socket.broadcast.emit('msg',{
//     text:msg,
//     senderName:userMap[socket.id]
// });
})
}