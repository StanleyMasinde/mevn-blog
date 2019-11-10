var mysql = require('mysql')
var config = require('../config')
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: config.DATABASE_HOST,
    user: config.DATABASE_USERNAME,
    password: config.DATABASE_PASSWORD,
    database: config.DATABASE,
    charset: 'utf8'
  }
})

const bookshelf = require('bookshelf')(knex)

// connection.query('SELECT * FROM innovators', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].company_name)
// })

module.exports = bookshelf