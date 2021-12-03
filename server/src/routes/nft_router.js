const express = require("express");
const router  = express.Router();

router.post('/', async(req, res) => {
  res.json("IMMA ISLAND BOAY");
});

router.get('/', async(req, res) => {
 res.json("IMMA ISLAND BOAY")
});



module.exports = router;
