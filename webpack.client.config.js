const webpack = require('webpack');

module.exports = {
    entry: './src/client/index.tsx',
    output: {
        path: './public',
        filename: 'client.js'
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        enforceExtension: false
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }]
        }, {
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