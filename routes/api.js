var express = require('express');
var router = express.Router();
var User = require('../app/User')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Welcome to our api')
});

router.get('/:version/posts', function (req, res, next) {
    new User().fetchAll().then(user => {
        res.json(user)
    })
})

// router.get('/:version/posts/:post', function (req, res, next) {
//     db.query(`SELECT * FROM users where id = '${req.params.post}' Limit 1`, function (err, results, fileds) {
//             res.json(results)
//     })
// })

module.exports = router;
