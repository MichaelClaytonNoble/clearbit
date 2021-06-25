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

const jdAnalysis = require("./routes/api/jdAnalysis");
const templates = require("./routes/api/templates");

app.use('/api/jd_analysis', jdAnalysis); 
app.use('/api/templates', templates); 

//parse the json we send to the frontend. 
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 