

const validateEmailSection = require('../../validations/email');

const express = require("express"); 
const router = express.Router(); 
const Subject = require('../../models/Subject'); 

router.get("/subjects", (req, res) => {

  Subject.find()
    .then( subjects => res.json(subjects))

});

router.post("/newSubject",(req, res) => { 

  const { isValid, errors } = validateEmailSection(req.body, "subject");

  if( !isValid) {
    return res.status(400).json(errors);
  }
  
  let subject = new Subject({
    content: req.body.content,
    variable: "s1"
  });


  console.log(isValid);
  // console.log("query:", req.query);
  // console.log("body:", req.body); 
  // console.log("headers: ", req.headers);


  subject.save()
    .then( subject => res.send(subject))
    .catch( err => res.send(err)); 

});


module.exports = router; 