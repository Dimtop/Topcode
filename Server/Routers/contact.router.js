const { Router } = require('express');
var express = require('express')
var router = express.Router();

const contactController = require("../Controllers/contact.controller");

router.post("/",contactController.postContact);



module.exports = router;