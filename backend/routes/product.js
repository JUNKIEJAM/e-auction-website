const express=require('express');
const router=express.Router();
const fetchuser=require('../middleware/fetchuser');
const Product=require('../models/Product')
const {body,validationResult}=require('express-validator');
const multer=require('multer');




//ROUTE 1: get all the notes using: GET :"api/auth/getuser":LOGIN REQUIRED

router.get('/',fetchuser,async(req,res)=>{

   Product.find()
   .then((article)=>res.json(article))
   .catch((err)=>res.status(400).json(`Error: ${err}`));
 
});

//ROUTE 2:add a new note using: POST :"api/auth/addnote":LOGIN REQUIRED

router.post('/addproduct', fetchuser, [
    body('title', 'Enter a valid name').isLength({ min: 3 }),
    body('price', 'Enter a valid price'),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        
        try {
            const { title,price,description, tag } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
      //      if (!errors.isEmpty()) {
        //        return res.status(400).json({ errors: errors.array() });
          //  }
            const product = new Product({
                title, price,description, tag, user: req.user.id
            })
            const savedProduct = await product.save()

            res.json(savedProduct)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

//Route 3: Add a new note using PUT: "/api/auth/updatenote".  Login Required

router.put('/updateproduct/:id',fetchuser,async(req,res)=>{

    const {title,description,tag}=req.body;

    //create a new note object
try{
    const newproduct={};
  
    if(title){
        newproduct.title=title
    }

    if(description){
        newproduct.description=description
    }

    if(tag){
        newproduct.tag=tag
    }

    // find a note to be update and update it

    let product=await Product.findById(req.params.id);

    if(!product){
       return res.status(404).send("Not Found");
    }

    if(!product.user.toString()!==req.user.id){
        return res.status(401).send("Not allowed")
    }

     product=await Product.findByIdAndUpdate(req.params.id,{$set:newproduct},{new:true})

    res.json({product});
}

    catch(error){
        console.error(error.mesaage);
        res.status(500).send("Internal Server Error")
    }


    
})


//Route 4: Delete a note using Delete: "/api/auth/delete".  Login Required

router.delete('/deleteprod/:id',fetchuser,async(req,res)=>{

   

    // find a note to be deleted

    try{
    let product=await Product.findById(req.params.id);

    if(!product){
       return res.status(404).send("Not Found");
    }

    // allow deletion for legit users
    if(!product.user.toString()!==req.user.id){
        return res.status(401).send("Not allowed")
    }

     product=await Product.findByIdAndDelete(req.params.id)

    res.json({"Success":"Product has been deleted",product:product});
    }

    catch(error){
        console.error(error.mesaage);
        res.status(500).send("Internal Server Error")
    }

    
})

module.exports=router