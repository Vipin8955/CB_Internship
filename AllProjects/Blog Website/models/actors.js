const mongoose=require('mongoose');
const actorSchema=new mongoose.Schema({
    name:{
        type:String
    },
    imageUrl:{
        type:String
    },
    age:{
        type:String
    }
});

const Actors=mongoose.model('actor',actorSchema);

module.exports=Actors;