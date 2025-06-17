const {readFile}=require('fs');
readFile("hello.txt",{encoding:'utf-8'},(err,data)=>{
    if(err)
    {
        return(console.log(err));
    }
    console.log(data);
})