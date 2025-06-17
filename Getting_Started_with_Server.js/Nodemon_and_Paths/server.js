const http=require('http');
const fs=require('fs');

const myServer=http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    if(req.url=='/') file='index.html';
    else if(req.url=='/profile') file='profile.html';
    else file='signin.html';
    fs.readFile(file,(err,data)=>{
        if(err)
        {
            return(console.log(err));
        }
        res.end(data);
    });
});


myServer.listen(8000,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Server Started at port 8000");
    }
});