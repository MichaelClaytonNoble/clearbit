
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignatureSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  variable:{
    type: String, 
  }
});

const Signature = mongoose.model('signature', SignatureSchema); 
module.exports = Signature; 
