let lib2=require('./lib2');
let a=10;
function add(a,b)
{
    console.log(a+b);
}

module.exports={
    add,
    a,
    lib2
};