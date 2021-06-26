const mongoose = require('mongoose'); 
const express = require('express'); 
const app = express(); 
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch( err => console.log(err));

app.get("/", (req, res) => res.send("hello world")); 

const port = process.env.PORT || 5000; 

app.listen(port, ()=> console.log(`Server is running on port ${port}`));

//parse the json we send to the frontend.
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const subject = require("./routes/api/subject");
app.use('/api/subject', subject); 

