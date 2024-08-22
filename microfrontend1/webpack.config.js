const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        publicPath: 'http://localhost:8081/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        port: 8081,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'microfrontend1',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/App',
            },
            shared: {
                react: { singleton: true, eager: true },
                'react-dom': { singleton: true, eager: true },
                antd: { singleton: true },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
