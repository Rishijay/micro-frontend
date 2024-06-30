const { dependencies } = require('./package.json');

module.exports = {
    name: 'module1',
    filename: 'remoteEntry.js',
    exposes: {
        './Module1': './src/App',
    },
    remotes: {},
    shared: {
        ...dependencies,
        react: {
            singleton: true,
            import: 'react',
            shareScope: 'default',
            requiredVersion: dependencies.react,
        },
        'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
        },
    },
};