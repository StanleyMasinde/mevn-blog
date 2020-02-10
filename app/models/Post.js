var Model = require('./model/Model')


class Post extends Model {
    fillable = [
        'title',
        'body',
    ]
}

module.exports = Post
