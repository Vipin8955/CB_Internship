const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'todoApp';
let _db;
 function main() {
   return client.connect().then(()=>{
    _db = client.db(dbName);
   }).catch((err)=>{
    reject(err);
   })}
function getDB(){
    if(_db) return _db;
    return null;
}
module.exports.mongoConnect=main;
module.exports.getDB=getDB;