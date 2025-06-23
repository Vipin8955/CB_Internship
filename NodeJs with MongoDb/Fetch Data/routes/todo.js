const express=require('express');
const router=express.Router();

const todocontroller=require('../controllers/todocontroller');

router.get('/gettodos',todocontroller.getgettodos);

router.post('/addtodo',todocontroller.postaddtodo);

router.post('/deletetodo',todocontroller.postdeletetodo);

router.get('/increasepriority',todocontroller.getincreasepriority);

router.get('/decreasepriority',todocontroller.getdecreasepriority);


module.exports=router;