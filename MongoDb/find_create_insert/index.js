// db.mongodb.insertOne({name:"vipin"})
// db.mongodb.insertMany([{name:"rahul"},{name:"lokesh"},{name:"arjun"},{name:"aashish"}])
// db.mongodb.find()
// db.mongodb.find({name:"vipin"})
// db.mongodb.find({name:{$in:['vipin','rahul']}})
// db.mongodb.find({name:"vipin"},{age:{$lt:30}})
// db.mongodb.find($or:[{name:'vipin'},{age:{$lt:30}}])
// db.mongodb.find().toArray()
// db.mongodb.find().limit(5)
// db.mongodb.find().skip(5).limit(5)

// db.mongodb.updateOne({
//     name:'vipin'
// },{
//     $set:{
//         age:20
//     }
// })