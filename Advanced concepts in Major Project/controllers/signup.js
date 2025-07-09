const USER=require('../models/user');
const bcrypt=require('bcrypt');
const saltRounds=10; 
async function handleGetSignup(req,res){
     res.render('signup',{msg:req.flash('msg')});
 }
async function handlePostSignup(req, res, next) {
    const { name, password } = req.body;
    try {
        let user = await USER.findOne({ name });

        if (!user) {
            try {
                const hash = await bcrypt.hash(password, saltRounds); // 🔧 changed here
                user = await USER.create({ username:name, password: hash,isAdmin:false });   // 🔧 and here

                req.flash('msg', 'SignUp Successful');
                return res.redirect('/login');
            } catch (err) {
                return next(err);  // 🔧 improved error handling
            }
        } else {
            req.flash('msg', 'User already exists');
            return res.redirect('/signup');
        }
    } catch (err) {
        next(err);
    }
}

module.exports={
    handleGetSignup,handlePostSignup
}