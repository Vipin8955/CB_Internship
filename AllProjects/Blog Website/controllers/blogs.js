const Actors = require('../models/actors');
const BLOG=require('../models/blogs');
const hbs=require('hbs');
async function handleGetBlogs(req,res){
    let blogs=await BLOG.find().populate('actor');
    let actors=await Actors.find();
    res.render('blogs',{
        blogs,actors
    });
}

async function handleAddBlog(req,res){
    const title=req.body.title;
    const description=req.body.description;
    const actor=req.body.actor;
    await BLOG.create({
        title:title,
        actor:actor,
        description:description,
    });
    res.redirect('/blogs');
}
async function handleDeleteBlog(req,res){
    const id=req.query.id;
    await BLOG.deleteOne({_id:id});
    res.redirect('/blogs');
}

async function handleUpdateBlog(req,res){
    const id=req.query.id;
    let blog=await BLOG.find({_id:id}).populate('actor');
    res.render('updateBlog',{blog:blog[0]});
}
async function handlePostUpdateBlog(req,res){
    const id=req.body.id;
    await BLOG.findOneAndUpdate(
        {_id:id},
    {
        title:req.body.title,
        actor:req.body.actor,
        description:req.body.description
    });
    res.redirect('/blogs');
}
async function handleshowDetails(req,res){
    const id=req.query.id;
    const blog=await BLOG.findOne({_id:id}).populate('actor');
    res.render('blogDetails',{
        blog
    });
}

async function handleGetActors(req,res){
    let actors=await Actors.find();
    res.render('actors',{
        actors
    });
}

async function handlePostActors(req,res){
    const {actorImageUrl,name,age}=req.body;
    await Actors.create({
        imageUrl:actorImageUrl,name,age
    });

    res.redirect('/actors');
}
async function handleDeleteActor(req,res){
    const id=req.query.id;
    await Actors.deleteOne({_id:id});
    res.redirect('/actors');
}
async function handleUpdateActor(req,res){
    const id=req.query.id;
    let actor=await Actors.findOne({_id:id});
    res.render('updateActor',{
        actor
    })
}
async function handlePostUpdateActor(req,res){
    const {name,age,actorImageUrl,id}=req.body;
    await Actors.findOneAndUpdate({_id:id},{
        name:name,
        age:age,
        imageUrl:actorImageUrl
    }); 
    res.redirect('/actors');
}
module.exports={
    handleGetBlogs,
    handleAddBlog,
    handleDeleteBlog,
    handleUpdateBlog,
    handlePostUpdateBlog,
    handleshowDetails,
    handleGetActors,
    handlePostActors,
    handleDeleteActor,
    handleUpdateActor,
    handlePostUpdateActor
}