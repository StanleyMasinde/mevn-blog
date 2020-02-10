var Model = require('./model/Model')


class User extends Model {
    fillable = [
        'name',
        'email',
        'password'
    ]
}
module.exports = User
