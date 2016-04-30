'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();  
server.connection({  
    port: 3000
});

// Add the route
server.route({  
    method: 'GET',
    path:'/books',
    handler: function (request, reply) {

        return reply('Here the books will be shown soon...');
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

