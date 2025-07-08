const express=require('express');
const router=express.Router();
const{getProducts}=require('../controllers/shop/product');

router.get('/',getProducts);
router.get('/products',getProducts);
module.exports=router;