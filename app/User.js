var { Model } = require('./orm')
var passport = require('passport')

class User extends Model {
    fillable = [
        'name',
        'email',
        'password'
    ]

    /**
     * Logs in a user
     * @param {Array} user 
     */
    login(user) {
        passport.authenticate('local')
    }

    /**
     * 
     * @param {Array} user 
     */
    register(user) {

    }

}

module.exports = User
