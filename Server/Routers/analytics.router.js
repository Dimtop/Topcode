const { Router } = require('express');
var express = require('express')
var router = express.Router();

const analyticsController = require("../Controllers/analytics.controller");

router.post("/",analyticsController.trackContactButtonPress);



module.exports = router;