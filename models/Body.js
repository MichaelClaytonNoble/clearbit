
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BodySchema = new Schema({
  content: {
    type: String,
    required: true
  },
    variable:{
    type: String, 
  }
});

const Body = mongoose.model('body', BodySchema); 
module.exports = Body; 
