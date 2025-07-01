const express=require('express');
const router=express.Router();
const myPassport=require('../auth/passport');
const { handleGetLogin } = require('../controllers/login');
const passport = require('../auth/passport');

router.get('/',handleGetLogin);
router.post('/',myPassport.authenticate('local',{failureRedirect:'/login'}),
    function(req,res){
        res.redirect('/profile');
    });
router.get('/facebook',myPassport.authenticate('facebook'));
router.get('/auth/facebook/callback',
    myPassport.authenticate('facebook',{failureRedirect:'/login'}),
    function(req,res){
        res.redirect('/profile');
    }
)
module.exports=router;