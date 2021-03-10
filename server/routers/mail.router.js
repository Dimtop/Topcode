const { Router } = require('express');
var express = require('express')
var router = express.Router();
const mailController = require("../controllers/mail.controller")

router.post("/contactForm",mailController.sendContactFormMail);


module.exports = router;