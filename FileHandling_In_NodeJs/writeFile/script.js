let fs=require('fs');
let data="Hello";

fs.writeFile('Hello.txt',data,(error)=>{
    if(error)
    {
        console.log("Error:",error);
    }
});

fs.writeFile('Hello.txt',"Vipin",(error)=>{
    if(error)
    {
        console.log("Error:",error);
    }});//will overwrite the whole content in hello.txt


fs.writeFile('Hello.txt',"Vipin2",{encoding:'utf-8',flag:'a'},(error)=>{//flag:'a' matlab append karna now the content will be appended instead of overwriting the previous content
    if(error)
    {
        console.log("Error:",error);
    }});