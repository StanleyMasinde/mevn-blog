var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'stanley',
  password: 'stanley',
  database: 'uunzi_web'
})

connection.connect()

// connection.query('SELECT * FROM innovators', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].company_name)
// })

module.exports = connection