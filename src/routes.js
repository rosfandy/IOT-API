const {
  DHT11AddData,
  ULTRASONIKAddData,
} = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/dht11',
    handler: DHT11AddData
  },
  {
    method: 'POST',
    path: '/ultrasonik',
    handler: ULTRASONIKAddData
  },
]

module.exports = routes
