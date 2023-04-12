const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const db = require('./connection')

const init = async () => {
  const server = Hapi.server({
    host: '0.0.0.0',
    port: '5500',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })

  server.route(routes)

  await server.start()
}

init()
