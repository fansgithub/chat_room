var alias = require('./webpack.alias.js');
var h5components = require(`${alias['h5-components']}/src/loader.js`);

module.exports = {
    'presets': [
        ['env', {
            'targets': {
            'browsers': ['iOS >= 7', 'Android >= 4.3']
            },
            'debug': true
        }],
        'react',
        'stage-0'
    ],
    'plugins': [
        'jsx-control-statements',
        'transform-runtime',
        'transform-decorators-legacy',
        h5components
    ],
    'env': {
        'production': {
            'plugins': ['transform-react-remove-prop-types']
        }
    }
}