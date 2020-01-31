var express = require('express');
var router = express.Router();

//The root of the api it does nothing
router.get('/:version', function (req, res, next) {
    res.json(req.params.version)
});

router.post('/:version/login', function (req, res, next) {
    res.json('Login')
});

router.post('/:version/password/reset', function (req, res, next) {
    res.json('password')
});

router.post('/:version/register', function (req, res, next) {
    res.json('Register')
});

router.post('/:version/posts', function (req, res, next) {
    res.json('posts')
});

router.post('/:version/posts/:slug', function (req, res, next) {
    res.json('Post')
});

module.exports = router;
