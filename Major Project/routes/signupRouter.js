const express=require('express');
const { handleGetSignup, handlePostSignup } = require('../controllers/signup');
const router=express.Router();

router.get('/',handleGetSignup);
router.post('/',handlePostSignup);


module.exports=router;