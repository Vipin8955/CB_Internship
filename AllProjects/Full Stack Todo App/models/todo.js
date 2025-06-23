const {getDB}=require('../database/database'); 
const {v4:uuidv4}=require('uuid');
const{ObjectId}=require('mongodb');
async function getPriority() {
    const counter = getDB().collection('counter');
    let doc = await counter.findOne({ id: 'myCounter' });
    if (!doc) {
        await counter.insertOne({ id: 'myCounter', val: 1 });
        return 1;
    }
    const updated = await counter.updateOne(
        { id: 'myCounter' },
        { $inc: { val: 1 } }
    );
    if (!updated.modifiedCount) {
        throw new Error("Could not update counter");
    }
    const newDoc = await counter.findOne({ id: 'myCounter' });
    if (!newDoc || typeof newDoc.val !== 'number') {
        throw new Error("Counter value missing after update");
    }
    return newDoc.val;
}
class Todo{
    static async addTodo(name){
        return new Promise(async (resolve,reject)=>{
        try{
            let todo=await getDB().collection('todo');
           
            let currentPriority=await getPriority();

            const data={
              name:name,
              id:uuidv4(),
              priority:currentPriority
        };
        const result=await todo.insertOne(data);
        resolve("Added Successfully");
       }catch(err){
            reject(err);
        }
        
        }
    )}

    static async getTodos(){
        return new Promise(async(resolve,reject)=>{
        try{
            let todo=await getDB().collection('todo');
            let data=await todo.find({}).sort({priority:1}).toArray();
            resolve(data);
        }catch(err){
            reject(err);
        }
        })
    }

     static async deleteTodo(id){
        return new Promise(async(resolve,reject)=>{
        try{
            let todo=await getDB().collection('todo');
            await todo.deleteOne({
                _id:new ObjectId(id)//if we use _id(provide by mongodb itself) instead of id (provided by uuidv4), we have to convert this into an ObjectId as it expexts an ObjectId not a string.
            });
            resolve("Deletion of task is successful:");
        }catch(err){
            reject(err);
        }
        })
    }



    static async increasePriority(id){
        return new Promise(async(resolve,reject)=>{
           try{
            let todo=await getDB().collection('todo');
            let currentItem=await todo.find({
                _id:new ObjectId(id)
            }).toArray();
            currentItem=currentItem[0];


            let allTasks=await todo.find({
                priority:{
                    $lt:currentItem.priority
                }
            }).sort({priority:-1}).toArray();

            let previosItem=allTasks[0];
            if(!previosItem){
                return resolve('Priority set Done');
            }
            console.log("Current Item:",currentItem);
            console.log("Previos Item",previosItem);

            await todo.updateOne(
                {_id:new ObjectId(currentItem._id)},
                {$set:{
                    priority:previosItem.priority
                }}
            );
             await todo.updateOne(
                {_id:new ObjectId(previosItem._id)},
                {$set:{
                    priority:currentItem.priority
                }}
            );

            resolve("Done");
           }catch(err){
            reject(err)
           }
        })
    }


     static async decreasePriority(id){
        return new Promise(async(resolve,reject)=>{
           try{
            let todo=await getDB().collection('todo');
            let currentItem=await todo.find({
                _id:new ObjectId(id)
            }).toArray();
            currentItem=currentItem[0];


            let allTasks=await todo.find({
                priority:{
                    $gt:currentItem.priority
                }
            }).sort({priority:1}).limit(1).toArray();

            let nextItem=allTasks[0];
            if(!nextItem){
                return resolve('Priority set Done');
            }
            console.log("Current Item:",currentItem);
            console.log("next Item",nextItem);

            await todo.updateOne(
                {_id:new ObjectId(currentItem._id)},
                {$set:{
                    priority:nextItem.priority
                }}
            );
             await todo.updateOne(
                {_id:new ObjectId(nextItem._id)},
                {$set:{
                    priority:currentItem.priority
                }}
            );

            resolve("Done");
           }catch(err){
            reject(err)
           }
        })
    }

}
module.exports=Todo;