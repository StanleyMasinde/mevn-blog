var express = require('express');
var router = express.Router();
var Post = require('../app/models/Post')
var User = require('../app/models/User')
var Validator = require('mevn-validator')

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
    let rules = {
        'email': 'required|email',
        'name': 'required',
        'password': 'required|min:8',
    }
    new Validator(req.body, rules)
    .validate()
    .then(() => {
        new User()
        .save(req.body)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.json(err, 500)
        })
    }).catch(messages => {
        res.status(422).json(messages)
    })

});

router.get('/:version/posts', function (req, res, next) {
    Post.all().then(posts => {
        res.json(posts)
    }).catch(err => {
        res.json(err)
    })
});

router.get('/:version/posts/:slug', function (req, res, next) {
    res.json('Post')
});

module.exports = router;
