var mqtt = require('mqtt')

client = mqtt.connect('mqtt://localhost', {clientId: 'abcdef', clean: false})

client.on('connect', function () {
  console.log('mqtt client connected');
  client.subscribe("iot2", {qos: 1});
});

client.on('message', function(topic, message) {
  console.log(topic);
  console.log(message);
});


