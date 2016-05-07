// Web Service that accepts POST

const Hapi = require('hapi')
const mqtt = require('mqtt')
const Joi = require('joi')

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  port: 8000,
  host: '0.0.0.0'
});

var mqttClient = mqtt.connect('mqtt://localhost');

// Add the route
server.route({
  method: 'POST',
  // path:'/sensor/{partnerId?}/{apiKey?}',
  path: '/ingest',
  handler: function (request, reply) {
    mqttClient.publish('iot2', JSON.stringify(request.payload), {retain: false, qos: 1})
    reply({

    }).code( 210 )
  },
  config: {
    validate: {payload: {
      id: Joi.string()
    }}
  }
});

// Start the server
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
