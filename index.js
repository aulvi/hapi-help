var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
  config: {
    cors: true
  },
  method: 'GET',
  path: '/hello/{foo?}',
  handler: function (request, reply) {
    reply('Hello, world!\n');
  }
});

server.route({
  config: {
    cors: true
  },
  method: 'POST',
  path: '/hello',
  handler: function (request, reply) {
    reply('Hello, world!\n');
  }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
