const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Subject = require('./Subject.js').schema
const Greeting = require('./Greeting.js)').schema
const Body = require('./Body.js').schema
const AttachedResume = require('./AttachedResume.js').schema
const Signature = require('./Signature.js').schema

const TemplateSchema = new Schema({

  email: {

    subject: Subject,
    greeting: Greeting,
    body: Body,
    attachedResume: AttachedResume,
    signature: Signature
  }
});


const Template = mongoose.model('template', TemplateSchema);
module.exports = Template

