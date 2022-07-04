//const connectToMongo=require('./db')
const express = require('express')
const mongoose=require('mongoose');
var cors=require('cors');
// connectToMongo();
const bodyParser=require('body-parser')
const app = express()
const port = process.env.PORT||5000;
require('dotenv').config();
const path = require('path')
app.use(cors())
app.use(express.json())

const uri=process.env.ATLAS_URI;

mongoose.connect(uri,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

const connection=mongoose.connection;
connection.once("open",()=>
console.log('MongoDB connection established'));

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})


app.use(bodyParser.json())
//Available Routes
app.use('/api/auth',require('./routes/auth'));
//app.use('/api/notes',require('./routes/notes'));
//app.use('/api/product',require('./routes/product'));
app.use('/articles',require('./routes/articles'));
///app.use('/file',require('./routes/file'));
//const userRouter = require('./routes/users');
//app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Biased Notebook listening on port ${port}`)
})

