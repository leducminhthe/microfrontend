const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.publicPath = 'auto';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'microfrontend1',
          filename: 'remoteEntry.js',
          exposes: {
            './App': './src/App',
          },
          shared: {
            ...deps,
            react: { singleton: true, eager: true, requiredVersion: deps.react },
            'react-dom': { singleton: true, eager: true, requiredVersion: deps['react-dom'] }
          },
        })
      );
      return webpackConfig;
    },
  },
};
