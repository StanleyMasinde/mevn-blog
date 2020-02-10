/**
 * Database
 * 
 */
var config = require('../../config')
var db = require('mysql')
var connection = db.createConnection({
    host: config.DATABASE_HOST,
    user: config.DATABASE_USER,
    password: config.DATABASE_PASSWORD,
    database: config.DATABASE_NAME
})
module.exports = connection
