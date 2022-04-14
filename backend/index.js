const connectToMongo=require('./db')
const express = require('express')
var cors=require('cors');
connectToMongo();
const bodyParser=require('body-parser')
const app = express()
const port = 5000

//require('dotenv').config();

app.use(cors())
app.use(express.json())
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

