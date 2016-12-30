// const path = require('path');
// const PROJECT_ROOT = __dirname;
// const SRC_DIR = path.join(PROJECT_ROOT, client);


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
    }
}