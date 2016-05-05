var path = require('path');
module.exports = {
    entry: {hash: "./src/hash.js",
            qprocessor: "./src/qprocessor.js"
           },
    output: {
        path: __dirname,
        filename: "build/[name].js"
    },
        module: {
            loaders: [
                {
                    loader: 'babel-loader',
                    test: path.resolve(__dirname, 'js'),
                    query: {
                        presets: ['es2015'],
                    },
                }
            ]
        },
    };
