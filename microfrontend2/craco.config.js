const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'auto';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'sharedUtils',
          filename: 'remoteEntry.js',
          exposes: {
            './Utils': './src/function/utils.ts',
          },
        }),
      );
      return webpackConfig;
    },
  },
};
