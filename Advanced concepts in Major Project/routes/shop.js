const express=require('express');
const router=express.Router();
const{getProducts,getProductDetails,postSubmitReview,getAddToCart,getCart,getIncreaseQty,getDecreaseQty,getDeleteCartItem}=require('../controllers/shop/product');

router.get('/',getProducts);
router.get('/products',getProducts);
router.get('/details',getProductDetails);
router.post('/submitreview',postSubmitReview)
router.get('/addtocart',getAddToCart);
router.get('/cart',getCart);
router.get('/increaseQty',getIncreaseQty);
router.get('/decreaseQty',getDecreaseQty);
router.get('/deletecartitem',getDeleteCartItem);
module.exports=router;