const express=require('express');
const router=express.Router();


router.get('/',(req,res,next)=>{
    if(!req.user)
        return res.redirect('/login');
    res.render('profile',{
        name:req.user.username,
    })
});
router.post('/',(req,res,next)=>{

});


module.exports=router;