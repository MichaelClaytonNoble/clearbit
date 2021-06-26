
//import validations and validate the input 
// const validateSubject = require('../../validations/email');

const express = require("express"); 
const router = express.Router(); 
const Subject = require('../../models/Subject'); 

router.get("/subjects", (req, res) => {

  Subject.find()
    .then( subjects => res.json(subjects))

});

router.post("/newSubject",(req, res) => { // const { isValid, errors } = validateSubject(req.body);
  // if( !isValid) {
  //   return res.status(b400).json(errors);
  // }
  
  let subject = new Subject({
    content: 'oeuoeuoeu',
    variable: "s1"
  });


  console.log(req)
  console.log("query:", req.query);
  console.log("body:", req.body); 
  console.log("headers: ", req.headers);


  subject.save()
    .then( subject => res.send(subject))
    .catch( err => res.send(err)); 

});


module.exports = router; 