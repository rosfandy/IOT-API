const moment = require('moment-timezone')
const db = require('./connection')

const DHT11AddData = (request, h) => {
  const { temperature, humidity } = request.payload

  console.log(temperature, humidity);
  const date = moment().tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss')

  db.query('INSERT INTO dht11_data(humidity, temperature, date) VALUES (?, ?, ?)', [humidity, temperature, date], function (err, results, fields) {
    if (err) {
      console.log(err)
      const responseFail = h.response({
        status: 'fail',
        message: 'Internal Server Error'
      })

      responseFail.code(500)
      return responseFail
    }
  })

  const response = h.response({
    status: 'success',
    message: 'Data Added'
  })

  response.code(200)
  return response
}

const ULTRASONIKAddData = (request, h) => {
  const { distance } = request.payload

  const date = moment().tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss')

  db.query('INSERT INTO ultrasonik_data(distance, date) VALUES (?,?)', [distance, date], function (err, results, fields) {
    if (err) {
      console.log(err)
      const responseFail = h.response({
        status: 'fail',
        message: 'Internal Server Error'
      })

      responseFail.code(500)
      return responseFail
    }
  })

  const response = h.response({
    status: 'success',
    message: 'Data Added'
  })
  response.code(200)
  return response
}

module.exports = {
  DHT11AddData,
  ULTRASONIKAddData,
}
