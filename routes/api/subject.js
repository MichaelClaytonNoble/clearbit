
const express = require("express"); 
const router = express.Router(); 
const Subject = require('../../models/Subject'); 

router.get("/subjects", (req, res) => {

  Subject.find()
    .then( subjects => res.json(subjects))

});






router.post("/newSubject", (req, res, body) => {




  debugger
  let subject = new Subject({
    content: '',
    variable: "s1"
  });

  subject.save()
    .then( subject => res.send(subject))
    .catch( err => res.send(err)); 

});


module.exports = router; 