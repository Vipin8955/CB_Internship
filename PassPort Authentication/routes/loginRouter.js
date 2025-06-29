const express=require('express');
const router=express.Router();
const myPassport=require('../auth/passport');
const { handleGetLogin } = require('../controllers/login');

router.get('/',handleGetLogin);
router.post('/',myPassport.authenticate('local',{failureRedirect:'/login'}),
    function(req,res){
        res.redirect('/profile');
    });
module.exports=router;