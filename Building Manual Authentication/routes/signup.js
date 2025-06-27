const express=require('express');
const router=express.Router();
const{handleGetSignup,handlePostSignup}=require('../controllers/signup');


router.get('/',handleGetSignup);
router.post('/',handlePostSignup);


module.exports=router;