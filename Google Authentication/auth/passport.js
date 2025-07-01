// All the strategies will be made here for that we have to require passport
const passport=require('passport');
const User=require('../models/user');
const LocalStrategy=require('passport-local');
const FacebookStrategy=require('passport-facebook');
const GoogleStrategy = require('passport-google-oauth20');
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



//FaceBook
passport.use(new FacebookStrategy({
    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL:"http://localhost:8000/login/auth/facebook/callback"
},async function(accessToken,refreshtoken,profile,cb){
    // User.findOrCreate({facebookId:profile.id},function(err,user){
    //     return cb(err,user);
    // });


    try{
        let user=await User.findOne({
            fbId:profile.id
        });
        if(user) return cb(null,user);
        user=await User.create({
            fbaccessToken:accessToken,
            fbId:profile.id,
            username:profile.displayName,
           
        });
        cb(null,user);
    }catch(err){
        cb(err,false);
    }
}
));


//Google Strategy


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_KEY,
    callbackURL: "http://localhost:8000/login/auth/google/callback"
  },
  async function(accessToken,refreshtoken,profile,cb){
    // User.findOrCreate({facebookId:profile.id},function(err,user){
    //     return cb(err,user);
    // });


    try{
        let user=await User.findOne({
            fbId:profile.id
        });
        if(user) return cb(null,user);
        user=await User.create({
            googleaccessToken:accessToken,
            googleId:profile.id,
            username:profile.displayName,
           
        });
        cb(null,user);
    }catch(err){
        cb(err,false);
    }
}
));

module.exports=passport;