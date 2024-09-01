const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.publicPath = 'auto';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'container',
          remotes: {
            microfrontend1: 'microfrontend1@http://localhost:8081/remoteEntry.js',
            sharedUtils: 'sharedUtils@http://localhost:8082/remoteEntry.js',
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
