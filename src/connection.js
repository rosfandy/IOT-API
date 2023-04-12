const MySQL = require('mysql')

const connection = MySQL.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'iot'
})

connection.connect(function (err) {
  if (err) {
    console.error('[mysql error]' + err.stack)
  } else {
    console.log('MySQL Terhubung')
  }
})

module.exports = connection
