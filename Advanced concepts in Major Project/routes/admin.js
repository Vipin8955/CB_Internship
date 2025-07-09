const express=require('express');
const router=express.Router();
const{getAddProduct,postAddProduct,getProducts,getEditProduct,getDetailsProduct,getDeleteProduct,postEditProduct,getDeleteReview}=require('../controllers/admin/product');

router.get('/add-product',getAddProduct);
router.post('/add-product',postAddProduct);
router.get('/products',getProducts);
router.get('/edit',getEditProduct);
router.get('/details',getDetailsProduct);
router.get('/delete',getDeleteProduct);
router.post('/editproduct',postEditProduct);
router.get('/deletereview',getDeleteReview);
module.exports=router;