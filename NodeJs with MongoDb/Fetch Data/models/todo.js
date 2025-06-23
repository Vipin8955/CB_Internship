const { resolve } = require('url');
const {getDB}=require('../database/database'); 
const {v4:uuidv4}=require('uuid');
class Todo{
    static async addTodo(name){
        return new Promise(async (resolve,reject)=>{
        try{
            let todo=await getDB().collection('todo');
            const data={
              name:name,
              id:uuidv4()
        };
        await todo.insertOne(data);
        resolve("Added Successfully");
       }
        catch(err){
            reject(err);
        }
        
        }
    )}

    static async getTodos(){
        return new Promise(async(resolve,reject)=>{
        try{
            let todo=await getDB().collection('todo');
            let data=await todo.find({}).toArray();
            resolve(data);
        }catch(err){
            reject(err);
        }
        })
    }
}


module.exports=Todo;