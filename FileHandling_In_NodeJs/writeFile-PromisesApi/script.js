const { error } = require('console');
const {writeFile}=require('fs/promises');
// let data="Hello";

// let write=writeFile('world.txt',data,{encoding:'utf-8',flag:'w'});
// write.then(()=>{
//     console.log("File written successfully");
// }).catch((error)=>{
//     console.log("Error:",error.message);
// });




let data="writing using async-await";
async function writeData(data){
    await writeFile("world.txt",data,{
        encoding:'utf-8',
        flag:'w'
    })
    console.log("I am Vipin");
}
writeData(data);
console.log("Running statemet here below");
