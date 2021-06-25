
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttachedResumeSchema = new Schema({
  content: {
    type: String,
    required: true
  },
    variable:{
    type: String, 
  }
});

const AttachedResume = mongoose.model('attachedResume', AttachedResumeSchema); 
module.exports = AttachedResume; 
