const express=require('express');
const { isAdmin } = require('../middlewares/admin');
const router=express.Router();


router.get('/',(req,res,next)=>{
    if(!req.user)
        return res.redirect('/login');
    res.render('profile',{
        name:req.user.username,
        isAdmin:req.user.isAdmin,
        carCount:req.user.cart.products.length
    })
});



module.exports=router;