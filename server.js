const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
});

fastify.get('/api/whoami', async (request, reply) => {
  console.log(request.headers);
  return { ipaddress: request.ip, language: request.headers['accept-language'], software: request.headers['user-agent'] }
});

const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start();