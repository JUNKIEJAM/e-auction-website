const express=require('express');
const router=express.Router();
const fetchuser=require('../middleware/fetchuser');
const Note=require('../models/Notes')
const {body,validationResult}=require('express-validator');

//ROUTE 1: get all the notes using: GET :"api/auth/getuser":LOGIN REQUIRED

router.get('/fetchallnotes',fetchuser,async(req,res)=>{

    try{
        const notes=await Notes.find({user:req.user.id})
        res.json(notes)
    }

    catch(error){
console.error(error.mesaage);
res.status(500).send("Internal Server Error")
    }

    
})

//ROUTE 2:add a new note using: POST :"api/auth/addnote":LOGIN REQUIRED

router.post('/addnote',fetchuser,[
    body('title','Enter a Title').isLength({min:3}),
    body('description','Write Description').isLength({min:5})
],async(req,res)=>{

    try{

    const {title,description,tag}=req.body;
    const errors=validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const note=new Note({
title,description,tag,user:req.user.id
    })
   const savedNote=await note.save();
   // const notes=await Notes.find({user:req.user.id})
res.json(savedNote)
    }

    catch(error){
        console.error(error.mesaage);
        res.status(500).send("Internal Server Error")
    }


})

//Route 3: Add a new note using PUT: "/api/auth/updatenote".  Login Required

router.put('/updatenote/:id',fetchuser,async(req,res)=>{

    const {title,description,tag}=req.body;

    //create a new note object
try{
    const newnote={};
  
    if(title){
        newnote.title=title
    }

    if(description){
        newnote.description=description
    }

    if(tag){
        newnote.title=tag
    }

    // find a note to be update and update it

    let note=await Note.findById(req.params.id);

    if(!note){
       return res.status(404).send("Not Found");
    }

    if(!note.user.toString()!==req.user.id){
        return res.status(401).send("Not allowed")
    }

     note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})

    res.json({note});
}

    catch(error){
        console.error(error.mesaage);
        res.status(500).send("Internal Server Error")
    }


    
})


//Route 4: Delete a note using Delete: "/api/auth/delete".  Login Required

router.delete('/delete/:id',fetchuser,async(req,res)=>{

   

    // find a note to be deleted

    try{
    let note=await Note.findById(req.params.id);

    if(!note){
       return res.status(404).send("Not Found");
    }

    // allow deletion for legit users
    if(!note.user.toString()!==req.user.id){
        return res.status(401).send("Not allowed")
    }

     note=await Note.findByIdAndDelete(req.params.id)

    res.json({"Success":"Note has been deleted",note:note});
    }

    catch(error){
        console.error(error.mesaage);
        res.status(500).send("Internal Server Error")
    }

    
})

module.exports=router