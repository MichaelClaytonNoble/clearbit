//maybe add in a spell checker too.

const Validator = require('validator'); 
const validText = require('./helpers/valid-text');

const maxLength = {
  subject: 55,
  greeting: 20,
  body: 800, 
  callToAction: 250,
  attachedResume: 75,
  signature: 125
}
const minLength = {
  subject: 7,
  greeting: 4,
  body: 100, 
  callToAction: 10,
  attachedResume: 10,
  signature: 10
}
module.exports = function validateEmailSection( data, type ){

  let errors = {}; 

  data.content = validText(data.content) ? data.content : ''; 

  if( !Validator.isLength(data.content, {min: minLength[type], max: maxLength[type]})){
    errors.text = `Text must be between ${minLength[type]} & ${maxLength[type]} chars`;

  }

  if( Validator.isEmpty(data.content)){
    errors.text = 'Text field is required';
  }
  console.log(errors);

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }


}
