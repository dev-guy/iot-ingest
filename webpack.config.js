var path = require('path');

module.exports = {
    entry: {
      hash: "./src/hash.js",
      "ingest-ws": "./src/ingest-ws.js"
    },
    target: "node",
    output: {
      path: __dirname,
      filename: "build/[name].js"
    },
    module: {
        loaders: [
        {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components|ws)/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015'],
                },
        },
        { test: /\.json$/, loader: "json"},
        ]
    },
};

