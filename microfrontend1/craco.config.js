const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'auto';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'microfrontend1',
          filename: 'remoteEntry.js',
          exposes: {
            './App': './src/App',
          },
        }),
      );
      return webpackConfig;
    },
  },
};
