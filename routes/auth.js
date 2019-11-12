var express = require('express');
var router = express.Router();
var User = require('../app/User')


router.post('/login', function (req, res, next) {
    res.cookie('XSRF-TOKEN', req.csrfToken())
   new User()
   .fetchAll()
   .then(user => {
        res.json(user)
    })
})

module.exports = router