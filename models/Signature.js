
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  variable:{
    type: String, 
  }
});

const Subject = mongoose.model('subject', SubjectSchema); 
module.exports = Subject; 
