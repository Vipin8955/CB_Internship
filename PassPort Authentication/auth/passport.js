// All the strategies will be made here for that we have to require passport
const passport=require('passport');
const User=require('../models/user');
const LocalStrategy=require('passport-local');
passport.use(new LocalStrategy({usernameField:'name',passwordField:'password'},
    async function(username,password,done){
        try{
            let user=await User.findOne({username:username})
            if(!user){return done(null,false);}
            // if(!user.verifyPassword(password)){return done(null,false)}
            return done(null,user);
        }catch(err){
            return done(err)
        }
        }));
passport.serializeUser( function(user,done){
    done(null,user.id);
})
passport.deserializeUser(async function(id,done){
    try{
        let user=await User.findById(id);
        done(null,user);
    }catch(err){
        done(err,user);
    }
});
module.exports=passport;