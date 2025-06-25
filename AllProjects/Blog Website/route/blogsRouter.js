const express=require('express');
const blogsRouter=express.Router();
const{handleGetBlogs,handleAddBlog,handleDeleteBlog,handleUpdateBlog,handlePostUpdateBlog,handleshowDetails,handleGetActors,handlePostActors,handleDeleteActor,handleUpdateActor,handlePostUpdateActor}=require('../controllers/blogs');

blogsRouter.get('/',handleGetBlogs);
blogsRouter.get('/blogs',handleGetBlogs);
blogsRouter.post('/blogs',handleAddBlog);
blogsRouter.get('/delete',handleDeleteBlog);
blogsRouter.get('/update',handleUpdateBlog);
blogsRouter.post('/update',handlePostUpdateBlog);
blogsRouter.get('/details',handleshowDetails);
blogsRouter.get('/actors',handleGetActors);
blogsRouter.post('/actors',handlePostActors);
blogsRouter.get('/deleteactor',handleDeleteActor);
blogsRouter.get('/update/actor',handleUpdateActor);
blogsRouter.post('/update/actors',handlePostUpdateActor);
module.exports={blogsRouter};  