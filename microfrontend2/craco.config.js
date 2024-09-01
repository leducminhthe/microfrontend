const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.publicPath = 'auto';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'sharedUtils',
          filename: 'remoteEntry.js',
          exposes: {
            './Utils': './src/function/utils.ts',
            './TableCustom': './src/table/index.tsx',
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
