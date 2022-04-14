const express=require('express');
const router=express.Router();
const Articles=require('../models/articles');
const { body, validationResult } = require('express-validator');
const multer=require('multer');

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
    callback(null,"./public/uploads/");
},
filename:(req,file,callback)=>{
    callback(null,file.originalname)
}
})

const upload=multer({storage:storage});
//request to get all articles

router.get('/',(req,res)=>{

    Articles.find()
    .then(article=>res.json(article))
    
    .catch(err=>res.status(400).json(`Error: ${err}`))
})

//request to  add new articles
router.post('/add',upload.single("articleImage"),(req,res)=>{
    const newArticle=new Articles({
        title:req.body.title,
        article:req.body.article,
        price:req.body.price,
        
        authorname:req.body.authorname,
        articleImage:req.file.originalname
     
    })

    newArticle.save().then(()=>
        res.json("The new Article posted Successfully")
    )
    .catch(err=>res.status(400).json(`Error:${err}`));
})

// request to find the article by ID
router.get('/:id',(req,res)=>{
    Articles.findById(req.params.id)
    .then((article=>{
        res.json(article)
    }))
    .catch(err=>res.status(400).json(`Error:${err}`))
})

/// request to find the article by ID and update
router.put('/update/:id',upload.single("articleName"),(req,res)=>{

    Articles.findById(req.params.id)
    .then(article=>{
      
            article.title=req.body.title;
            article.article=req.body.article;
            article.authorname=req.body.authorname;
            article.price=req.body.price;
            article.articleImage=req.file.originalname;
            

            article
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

    Articles.findByIdAndDelete(req.params.id)
    .then(res.json("The Article has been Deleted successfully"))
   
    .catch(err=>res.status(400).json(`Error:${err}`))
});

module.exports=router;