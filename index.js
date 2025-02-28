const express = require('express');
const { resolve } = require('path');
const dotenv=require('dotenv')
dotenv.config()
const mongoose=require('mongoose');
const Signup = require('./Routes/Signup');
const URL=process.env.MongoURL;


const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(express.json())
app.use('/',Signup)

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  try{
    mongoose.connect(URL)
    console.log("connected")
  }catch(error){
    console.log("Error",error)
  }
  console.log(`Example app listening at http://localhost:${port}`);
});
