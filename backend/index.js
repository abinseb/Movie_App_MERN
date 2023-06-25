const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const Movie = require('./model/model');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3600;
// const DB_CONNECT = process.env.DB;

// Connect to MongoDB
mongoose.connect("mongodb+srv://abinseb09:abinseb09@cluster0.2xp4bal.mongodb.net/Moviedb?retryWrites=true&w=majority")
  .then(() => {
    console.log('Database connected');

   
  })
  .catch((err) => console.error(err));

// app.use(express.urlencoded({extended:true}))
// app.use(express.json());

//   router
const MovieRouter =require('./Routes/Movie')
app.use('/', MovieRouter);


app.listen(PORT, () => {
    console.log('Server connected on port', PORT);
  });



