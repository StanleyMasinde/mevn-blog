var express = require('express');
var router = express.Router();
var User = require('../app/User')


router.post('/login', function (req, res, next) {
    //login user
})

router.post('/register', function (req, res, next) {
    //register a user
})

module.exports = router