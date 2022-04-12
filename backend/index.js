const connectToMongo=require('./db')
const express = require('express')
var cors=require('cors');
connectToMongo();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
//Available Routes
app.use('/api/auth',require('./routes/auth'));
//app.use('/api/notes',require('./routes/notes'));
//app.use('/api/product',require('./routes/product'));
app.use('/articles',require('./routes/articles'));

app.listen(port, () => {
  console.log(`Biased Notebook listening on port ${port}`)
})