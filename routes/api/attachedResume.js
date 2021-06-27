
const express = require("express"); 
const router = express.Router(); 
const AttachedResume = require('../../models/AttachedResume'); 

router.get("/api/attachedresumes", (req, res) => {
  AttachedResume.find()
    .then( attachedResume => res.json(attachedResume));
});

router.post("/newAttachedResume", (req, res) => {

});


module.exports = router; 