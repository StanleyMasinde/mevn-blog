var { Model } = require('./orm')

class Post extends Model {
    fillable = [
        'title',
        'body',
    ]
}

module.exports = Post
