'use strict';

// Web Service that accepts POST

const Hapi = require('hapi')
const mqtt = require('mqtt')

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  port: 8000,
  host: 'localhost'
});

let mqttClient = mqtt.connect('mqtt://localhost');

let subscribedTopics = new Map();
let clientCount = 5;

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function subscribeToTopic(clientId) {}
  subscribedTopics.put($clientId, 1)

  client = mqtt.connect('mqtt://localhost', {clientId: 'clientId', clean: false})

  client.on('connect', function () {
    console.log(`Subscribed to client ID ${clientId}`)
    client.subscribe(`in/${clientId}/#`, {qos: 1});
    client.end();
  })
}

function validatePassword(req) {
  var auth = req.headers['authorization'];  // auth is in base64(username:password)  so we need to decode the base64

  if(!auth) {     // No Authorization header was passed in so it's the first time the browser hit us

  // Sending a 401 will require authentication, we need to send the 'WWW-Authenticate' to tell them the sort of authentication to use
  // Basic auth is quite literally the easiest and least secure, it simply gives back  base64( username + ":" + password ) from the browser

  res.end('<html><body>Need some creds son</body></html>');
}

else if(auth) {    // The Authorization was passed in so now we validate it

  var tmp = auth.split(' ');   // Split on a space, the original auth looks like  "Basic Y2hhcmxlczoxMjM0NQ==" and we need the 2nd part

  var buf = new Buffer(tmp[1], 'base64'); // create a buffer and tell it the data coming in is base64
  var plain_auth = buf.toString();        // read it back out as a string

  console.log("Decoded Authorization ", plain_auth);

  // At this point plain_auth = "username:password"

  var creds = plain_auth.split(':');      // split on a ':'
  var username = creds[0];
  var password = creds[1];

  if((username == 'hack') && (password == 'thegibson')) {   // Is the username/password correct?

    res.statusCode = 200;  // OK
    res.end('<html><body>Congratulations you just hax0rd teh Gibson!</body></html>');
  }
  else {
    res.statusCode = 401; // Force them to retry authentication
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');

    // res.statusCode = 403;   // or alternatively just reject them altogether with a 403 Forbidden

    res.end('<html><body>You shall not pass</body></html>');
  }

// Add the route
server.route({
  method: 'POST',
  path:'/ingest/{id}',
  handler: function (request, reply) {

    JSON.parse(request.payload)
    let partnerId = validatePassword(message.partnerId, request.query.password);

    if (!partnerId) {
      reply
        .code(401)
        .setHeader('WWW-Authenticate', 'Basic realm="Secure Area"')
        .payload({error: 'Invalid partner id or API key'})
    }
    else {
      let message = {
        payload: request.payload,
        id: request.params.id,
        partnerId: request.query.partnerId
      }

      let clientId = getRandomInt(1, clientCount)

      if (!subscribe.has($clientId)) {
        subscribe.put($clientId, 1);
      }

      mqttClient.publish(`in/${clientId}/${partnerId}`, JSON.stringify(message), {retain: false, qos: 1})
      reply().payload({})
    }

    reply().send()
  }
});

// Start the server
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});

