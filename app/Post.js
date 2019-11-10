/**
 * Post Model
 */
var bookshelf = require('../database/database')

const Post = bookshelf.Model('Post', {
    tableName: 'posts'
})

module.exports = Post