const Product=require('../../models/products');
async function getProducts(req,res,next){
   
    try{
        let products=await Product.find({});
        res.render('shop/products',{
            products,
            isAdmin:req.user.isAdmin
        });
    }catch(err){
        next(err);
    }
    
}
module.exports={
    getProducts,
}