const baseModule = require('hbs');
const Vehicle=require('../models/vehicle');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


async function getHome(req,res){
  res.render('home',{isAdmin:req.user.isAdmin});
}
async function getAbout(req,res){
  res.render('about',{isAdmin:req.user.isAdmin});
}
async function getVehicles(req,res){
  res.render('vehicles',{isAdmin:req.user.isAdmin});
}
async function getAddVehicle(req,res){
  res.render('addvehicle',{isAdmin:req.user.isAdmin});
}
async function getBookNow(req,res){
  const id=req.query.id;
  const vehicle=await Vehicle.findById({_id:id});
  res.render('booknow',{
    isAdmin:req.user.isAdmin,vehicle
  });
}
async function getLogOut(req,res,next){
  req.logout(function(err){
    if(err) return next(err);
    res.redirect('/login');
  })
}
async function getLogIn(req,res){
  res.redirect('/login');
}
async function getContactUs(req,res,next){
  res.render('contactus',{isAdmin:req.user.isAdmin});
}
async function postContactUs(req,res,next){
    const { name, email, message } = req.body;
    const adminMsg = {
        to: process.env.TO_EMAIL,  
        from:process.env.TO_EMAIL ,
        replyTo:email,               
        subject: `New Contact Form Submission from ${name}`,
        text: message,
        html: `<strong>Name:</strong> ${name}<br>
               <strong>Email:</strong> ${email}<br>
               <strong>Message:</strong><br>${message}`
    };
    const userMsg = {
        to: email,                 
        from: process.env.TO_EMAIL, 
        subject: `Confirmation: We’ve received your message`,
        text: `Hi ${name},\n\nThank you for reaching out! We have received your message and will get back to you shortly.\n\nMessage:\n${message}`,
        html: `<strong>Hi ${name},</strong><br><br>Thank you for reaching out! We have received your message and will get back to you shortly.<br><br><strong>Your Message:</strong><br>${message}`
    };
    try {
        await sgMail.send(adminMsg);
        await sgMail.send(userMsg);
        res.render('contactus', { success: true });
    } catch (error) {
        console.error('SendGrid Error:', error);
        res.render('contactus', { error: true });
    }
};
module.exports={
    getHome,getAbout,getVehicles,getAddVehicle,getBookNow,getLogOut,getLogIn,getContactUs,postContactUs
}