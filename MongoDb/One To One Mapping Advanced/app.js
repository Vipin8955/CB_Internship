const express=require('express');
const app=express();

app.listen(8000,()=>{
    console.log("Server is Running");
})
mongod --dbpath=Data
use Data
db.createCollection('students')
db.studednts.insertMany([
    {
        _id:1,
        name:'Vipin',
        class:'tenth'
    },
    {
        _id:2,
        name:'rahul',
        class:'tenth'
    },
    {
        _id:3,
        name:'lokesh',
        class:'tenth'
    }
])
db.profiles.insertMany([
    {
       student_id:1,
       age:15,
       address:'Delhi'
    },
    {
       student_id:2,
       age:16,
       address:'Mumbai'
    },
    {
       student_id:3,
       age:17,
       address:'Bangalore'
    }
])


db.onetoone.aggregate({
    $lookup:{
        from:'profiles',
        localField:'_id',
        foreignField:'student_id',
        as:'Profile'
    }
})
