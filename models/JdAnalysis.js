const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const JdAnalysisSchema = new Schema({

  skills:{
    type: Array,
    required: false
  },
  timestamps: true
});


const JdAnalysis = mongoose.model('jdAnalysis', JdAnalysisSchema);
module.exports = JdAnalysis

