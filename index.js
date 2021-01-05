require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/database');
const cors = require('cors');
const DB_PORT = process.env.DB_PORT || 5000;

db.authenticate()
  .then(() =>{
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());

app.listen(DB_PORT, console.log(`Server started on port ${DB_PORT}`));