// const path = require('path');
// const PROJECT_ROOT = __dirname;
// const SRC_DIR = path.join(PROJECT_ROOT, client);
const webpack = require('webpack');

module.exports = {
    entry: './src/client/index.tsx',
    output: {
        path: './public',
        filename: 'client.js'
    },
    devtool: 'inline-source-map',
    resolve: {
        // alias: {
        //     '~': SRC_DIR
        // },
        extensions: ['.js', '.ts', '.tsx'],
        enforceExtension: false
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.API_PREFIX': JSON.stringify(`${process.env.API_HOST || 'http://localhost:3000/api'}`)
        })
    ]
}