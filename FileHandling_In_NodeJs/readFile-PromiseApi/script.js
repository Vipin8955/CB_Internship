const{readFile}=require('fs/promises');
// let file=readFile("hello.txt",{encoding:'utf-8'});
// file.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     consolele.log(err);
// });




async function readData(){
    let data=await readFile('hello.txt',{encoding:'utf-8'});
    console.log(data);
}
readData();