const express=require('express');
const app=express();
const {createServer}=require('http');
const{Server}=require('socket.io');
const httpServer=createServer(app);
const PORT=8000;
const path=require('path');
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
const io=new Server(httpServer);
 

const onConnection=(socket)=>{
    require('./scripts/chatapp/chatapp')(socket,io);
}
io.on("connection",onConnection);
app.get('/chat',(req,res)=>{
    res.render('chat');
})

httpServer.listen(PORT,()=>{
    console.log("Server is running at port:",PORT);
})