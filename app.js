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

const subject = require("./routes/api/subject")
const greeting = require("./routes/api/greeting")
const body = require("./routes/api/body")
const callToAction = require("./routes/api/callToAction")
const attachedResume = require("./routes/api/attachedResume")
const signature = require("./routes/api/signature")
const jdAnalysis = require("./routes/api/jdAnalysis")
const templates = require("./routes/api/templates")

app.use('/api/subject', subject); 
app.use('/api/greeting', greeting); 
app.use('/api/body', body); 
app.use('/api/callToAction', callToAction); 
app.use('/api/attachedResume', attachedResume); 
app.use('/api/signature', signature); 
app.use('/api/jdAnalysis', jdAnalysis); 
app.use('/api/templates', templates); 



