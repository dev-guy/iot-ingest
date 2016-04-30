'use strict';

// Web Service that accepts POST

const Hapi = require('hapi');

var mqtt = require('mqtt')

mqttClient = mqtt.createClient(1883, 'localhost');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  port: 3000
});

// Add the route
server.route({
  method: 'POST',
  path:'/sensor/{partnerId?}/{apiKey?}',
  handler: function (request, reply) {
        client.publish('iot', JSON.stringify(request.payload)
        reply({});
  }
});

// Start the server
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});

