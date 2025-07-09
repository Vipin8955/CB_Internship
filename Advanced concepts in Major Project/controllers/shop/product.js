const Product=require('../../models/products');
const Review=require('../../models/reviews');
async function getProducts(req,res,next){
    try{
        let products=await Product.find({});
        res.render('shop/products',{
            products,
            isAdmin:req.user.isAdmin,
            cartCount:req.user.cart.products.length
        });
    }catch(err){
        next(err);
    }
}
async function getProductDetails(req,res,next){
   const{id}=req.query;
    try{
        let products=await Product.find({_id:id}).populate('reviews');
        res.render('shop/productdetails',{
            product:products[0],
            isAdmin:req.user.isAdmin,
            cartCount:req.user.cart.products.length
        });
    }catch(err){
        next(err);
    }
}
async function postSubmitReview(req,res,next){
    const{title,description,productId}=req.body;
    try{
    let review=await Review.create({
        title,description
    });
    let product=await Product.findById(productId);
    product.reviews.unshift(review._id);
    await product.save();
    product=await Product.findById(productId).populate('reviews');
    res.send({
        reviews:product.reviews
    });
    }catch(err){
    return next(err);
    }
}
async function getAddToCart(req,res,next){
    const{productId}=req.query;
    req.user.addToCart(productId).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        next(err);
    });
}
async function getCart(req,res,next){
    req.user.populate('cart.products.id').then((user)=>{
       let products=user.cart.products;
       let totalPrice=0;
       products.forEach(product => {
        totalPrice+=(product.id.price*product.quantity);
       });
        res.render('shop/cart',{
            products:user.cart.products,
            cartCount:req.user.cart.products.length,
            totalPrice
        });
    }).catch((err)=>{
        next(err);
    });
}


async function getIncreaseQty(req,res,next){
    let {productId}=req.query;
    let userId=req.user._id;
     req.user.populate('cart.products.id').then(async(user)=>{
       let products=user.cart.products;
       let totalPrice=0;
       products.forEach( product => {
            if(product.id._id==productId)
            {
                product.quantity+=1;
            }
       });
       products.forEach((product)=>{
        totalPrice+=(product.id.price*product.quantity);
       })
       try{
        await req.user.save();
       }catch(err){
        return next(err);
       }
        res.send({
            msg:"Quantity Increased",
            totalPrice
        });
    }).catch((err)=>{
        next(err);
    });

}
async function getDecreaseQty(req,res,next){
    let {productId}=req.query;
    let userId=req.user._id;
     req.user.populate('cart.products.id').then(async(user)=>{
       let products=user.cart.products;
       let totalPrice=0;
       products.forEach( product => {
            if(product.id._id==productId)
            {
                product.quantity-=1;
            }
       });
       products.forEach((product)=>{
        totalPrice+=(product.id.price*product.quantity);
       })
       try{
        await req.user.save();
       }catch(err){
        return next(err);
       }
        res.send({
            msg:"Quantity Decreased",
            totalPrice
        });
    }).catch((err)=>{
        next(err);
    });
}

async function getDeleteCartItem(req,res,next){
     let {productId}=req.query;
    let userId=req.user._id;
     req.user.populate('cart.products.id').then(async(user)=>{
       let products=user.cart.products;
       let totalPrice=0;
       let newProducts=products.filter( product => {
            if(product.id._id==productId)
            {
               return false;
            }
            return true;
       });
       newProducts.forEach((product)=>{
        totalPrice+=(product.id.price*product.quantity);
       })
       user.cart.products=newProducts;
       try{
        await req.user.save();
       }catch(err){
        return next(err);
       }
        res.send({
            msg:"Cart Item deleted successfully",
            totalPrice
        });
    }).catch((err)=>{
        next(err);
    });
}
module.exports={
    getProducts,getProductDetails,postSubmitReview,getAddToCart,getCart,getIncreaseQty,getDecreaseQty,getDeleteCartItem
}