const express=require('express');
const router=express.Router();
const Files=require('../models/file');
const { body, validationResult } = require('express-validator');
const formidable=require('formidable')

//request to get all articles

router.get('/',(req,res)=>{

    Files.find()
    .then(file=>res.json(file))
    
    .catch(err=>res.status(400).json(`Error: ${err}`))
})

//request to  add new articles
router.post('/add',(req,res)=>{
    const newFile=new Files({
        title:req.body.title,
        article:req.body.article,
        price:req.body.price,
        authorname:req.body.authorname
     
    })

    newFile.save().then(()=>
        res.json("The new Article posted Successfully")
    )
    .catch(err=>res.status(400).json(`Error:${err}`));
})

// request to find the article by ID
router.get('/:id',(req,res)=>{
    Files.findById(req.params.id)
    .then((file=>{
        res.json(file)
    }))
    .catch(err=>res.status(400).json(`Error:${err}`))
})

/// request to find the article by ID and update
router.put('/update/:id',(req,res)=>{

    Files.findById(req.params.id)
    .then(file=>{
      
        file.title=req.body.title;
        file.article=req.body.article;
        file.authorname=req.body.authorname;
            file.price=req.body.price;

            file
            .save()
            .then(()=>{
                res.json("The Article is Updated successfully")
            })

            .catch(err=>res.status(400).json(`Error:${err}`))
    })
   
    .catch(err=>res.status(400).json(`Error:${err}`))
});
/// request to find the article by ID and delete
router.delete('/delete/:id',(req,res)=>{

    Files.findByIdAndDelete(req.params.id)
    .then(res.json("The Article has been Deleted successfully"))
   
    .catch(err=>res.status(400).json(`Error:${err}`))
});



module.exports=router;