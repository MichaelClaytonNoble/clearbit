
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CallToActionSchema = new Schema({
  content: {
    type: String,
    required: true
  },
    variable:{
    type: String, 
  }
});

const CallToAction = mongoose.model('callToAction', CallToActionSchema); 
module.exports = CallToAction; 
