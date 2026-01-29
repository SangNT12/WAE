const express = require("express");
const router = express.Router();
const useCasesData = require("../data/useCases");

router.get("/", (req, res) => {
  res.json(useCasesData);
});

module.exports = router;
