const express=require('express');
const router=express.Router();
const{handleGetProfile}=require('../controllers/pofile');

router.get('/',handleGetProfile);

module.exports=router;