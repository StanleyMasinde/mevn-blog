var { Model } = require('mevn-orm')

class Post extends Model {
    fillable = [
        'title',
        'body',
    ]
}

module.exports = Post
