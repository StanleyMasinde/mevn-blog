var mysql = require('mysql')
var config = require('../config')
var connection = mysql.createConnection({
  host: config.DATABASE_HOST,
  user: config.DATABASE_USERNAME,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE
})

connection.connect()

// connection.query('SELECT * FROM innovators', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].company_name)
// })

module.exports = connection