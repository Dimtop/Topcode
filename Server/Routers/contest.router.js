const { Router } = require('express');
var express = require('express')
var router = express.Router();

const contestController = require("../Controllers/contest.controller");

router.post("/",contestController.postContest)

module.exports = router;