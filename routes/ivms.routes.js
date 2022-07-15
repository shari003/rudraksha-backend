const express = require("express");
const router = express.Router();

const {addToIVMS} = require("../controllers/ivms.controller");

router.post("/add-to-IVMS", addToIVMS);

module.exports = router;