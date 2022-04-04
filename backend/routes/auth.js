const express=require('express');
const User=require('../models/User');
const router=express.Router();
const {body,validationResult}=require('express-validator');
const bcrypt=require('bcryptjs')
const fetchuser=require('../middleware/fetchuser');
const jwt=require('jsonwebtoken');

const JWT_SECRET='Pritheshisa$boy'
// Route 1:create a user using POST: // No login required
router.post('/createuser',[
    body('name').isLength({min:3}),
    body('email').isEmail(),
    body('password','password must be at least 5 characters').isLength({min:5})
],async(req,res)=>{

  let success=false;

    // if there are errors return bad request and the errors
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
   // check whether the user with same email exists already
  
   try{

   let user =await User.findOne({email:req.body.email})

   if(user){
       console.log(user)
       return res.status(400).json({success,error:"An user with this email exists"})
   }

   const salt=await bcrypt.genSalt(10);

   const secPass=await bcrypt.hash(req.body.password,salt)

   //create a new user
   user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPass
    });


    const data={
        user:{
         id:user.id   
        }
    }

   const authToken= jwt.sign(data,JWT_SECRET);
   //console.log(authToken);
    
    //res.json({user})
    success=true;
    res.json({success,authToken});

}
catch(error){
    console.log(error.message)
    res.status(500).send("Internal Server Occured")
}

    //.then(user=>res.json(user)).catch(err=>{console.log(err)
    //res.json({error:"Please enter a uniqe value for email",message:err.message})});

//    res.send(req.body);
})

// Route 2: Authenticate a user  using POST: /api/uth/createuser // No login required

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
  ], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false
        return res.status(400).json({ error: "Please try to login with correct credentials" });
      }
  
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false
        return res.status(400).json({ success, error: "Please try to login with correct credentials" });
      }
  
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken })
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
})

// Route 3: get log in user details  using POST: /api/auth/getuser // login required

router.post('/getuser',fetchuser,async(req,res)=>{


try{
    var userId=req.user.id;
    const user=await User.findById(userId).select("-password")
    res.send(user);
} catch(error){

    console.log(error.message)
    res.status(500).send("Internal Server Occured")

}
})

module.exports=router