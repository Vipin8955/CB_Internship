const express=require('express');
const router=express.Router();
const{handleGetLogin,handlePostLogin}=require('../controllers/login');

router.get('/',handleGetLogin);
router.post('/',handlePostLogin);

module.exports=router;