const http=require('http');


const myServer=http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    res.end("<h1 style='color:red;'>Hello from Septonic</h1>");
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