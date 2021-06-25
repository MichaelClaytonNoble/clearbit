
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GreetingSchema = new Schema({
  content: {
    type: String,
    required: true
  },
    variable:{
    type: String, 
  }
});

const Greeting = mongoose.model('greeting', GreetingSchema); 
module.exports = Greeting; 
