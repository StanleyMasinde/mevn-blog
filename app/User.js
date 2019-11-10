/**
 * This is the user model
 */
var bookshelf = require('../database/database')
var Post = require('./Post')

const User = bookshelf.model('User', {
    tableName: 'users',
    posts() {
        return this.hasMany(Post)
    }
})

module.exports = User