const mongoose=require('mongoose');
async function connectMongoDb(url){
    try{
      await mongoose.connect(url);
    }catch(error){
        console.log("Error Occured:",error);
        throw(error);
    }
}
module.exports={connectMongoDb};