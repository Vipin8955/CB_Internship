const { isAdmin } = require('../../middlewares/admin');
const Product=require('../../models/products');
const Review = require('../../models/reviews');
async function getAddProduct(req,res,next){
    res.render('admin/addproduct',{isAdmin:true,carCount:req.user.cart.products.length});
}
async function postAddProduct(req,res,next){
    const{name,price,imageUrl,description}=req.body;
    try{
        await Product.create({
        name,
        price,
        imageUrl,
        description,
        user_id:req.user._id
    });
    res.redirect('/admin/products');
    }catch(err){
        next(err);
    }
    
}
async function getProducts(req,res,next){
    try{
        let products=await Product.find({
            user_id:req.user._id
        });
        res.render('admin/products',{
            products,
            isAdmin:true,
            carCount:req.user.cart.products.length
        });
    }catch(err){
        next(err);
    }
    
}
async function getEditProduct(req,res,next){
    try{
        const product_id=req.query.id;
        let products=await Product.find({
            _id:product_id 
        });
        res.render('admin/editproduct',{
            product:products[0],
            isAdmin:true,
            carCount:req.user.cart.products.length
        });
    }catch(err){
        next(err);
    }
    
}
async function getDetailsProduct(req,res,next){
    try{
        const product_id=req.query.id;
    }catch(err){
        next(err);
    }
    
}
async function getDeleteProduct(req,res,next){
    try{
        const product_id=req.query.id;
        await Product.findByIdAndDelete({_id:product_id});
        res.redirect('/admin/products')
    }catch(err){
        next(err);
    }
    
}

async function postEditProduct(req,res,next){
    try{
        const{name,price,imageUrl,description,id}=req.body;
        console.log(id);
        await Product.findByIdAndUpdate({_id:id},{
            name:name,
            price:price,
            imageUrl:imageUrl,
            description:description,
        });
        res.redirect('/admin/products');
    }catch(err){
        next(err);
    }
}

async function getDeleteReview(req,res,next){
    const {id,productId}=req.query;
   try{ 
    await Review.findByIdAndDelete(id);
    let product=await Product.findById(productId).populate('reviews');
    product.reviews.pull({_id:id});
    await product.save();
    res.render('shop/productdetails',{
            product,
            isAdmin:req.user.isAdmin,
            carCount:req.user.cart.products.length
        });
    }catch(err){
      next(err);
    }
}




module.exports={
    getAddProduct,
    postAddProduct,
    getProducts,
    getEditProduct,
    getDetailsProduct,
    getDeleteProduct,
    postEditProduct,
    getDeleteReview
}