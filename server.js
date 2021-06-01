const fastify = require('fastify')({ logger: true });
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

fastify.register(require('fastify-cors'));

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
});

fastify.get('/api/whoami', async (request, reply) => {
  console.log(request.headers);
  return { ipaddress: request.ip, language: request.headers['accept-language'], software: request.headers['user-agent'] }
});

const start = async () => {
  try {
    await fastify.listen(PORT, HOST);
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start();