const express = require('express'); 
const router = express.Router();

const Template = require('../../models/Template'); 
const Subject = require('../../models/Subject'); 
const Greeting = require('../../models/Greeting'); 
const Body = require('../../models/Body'); 
const CallToAction = require('../../models/CallToAction'); 
const AttachedResume = require('../../models/AttachedResume'); 
const Signature = require('../../models/Signature'); 


router.get('/test', (req, res) => res.json({msg: "this is the templates route"}));


router.post('/NewTemplate', (req, res) => {

  let {subject, greeting, body, callToAction, attachedResume, signature } = req.body.email;

  let subjectPart = new Subject ({content: subject, variable: "s1"});
  let greetingPart = new Greeting({content: greeting, variable: "g1"});
  let bodyPart = new Body({content: body, variable: "b1"});
  let callToActionPart = new CallToAction({content: callToAction, variable: "c1"});
  let attachedResumePart = new AttachedResume({content: attachedResume, variable: "a1"});
  let signaturePart = new Signature({content: signature, variable: "i1"});

  if( !subject || !greeting || !body || !callToAction || !attachedResume || !signature ){
    return res.status(400).json({
      template: "Cannot save incomplete templates"
    }); 
  }
  else{

    const newTemplate = new Template({
      subject: subjectPart,
      greeting: greetingPart,
      body: bodyPart,
      callToAction: callToActionPart,
      attachedResume: attachedResumePart,
      signature: signaturePart
    });
    
    newTemplate.save()
    .then( template => res.send(template))
    .catch( err => res.send(err)); 
  }
});


module.exports = router; 

