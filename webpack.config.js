const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.base'), {
    context: __dirname,

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'questionnaire-ui',
        libraryTarget: 'umd',
    },

    externals: {
        axios: 'axios',
        buefy: 'buefy',
        vue: 'vue',
    },
});
