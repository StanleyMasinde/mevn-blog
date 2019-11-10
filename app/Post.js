/**
 * Post Model
 */
var bookshelf = require('../database/database')

const Post = bookshelf.model('Post', {
    tableName: 'posts'
})

module.exports = Post