const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: 'http://localhost:8080/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
        watchFiles: ["src/**/*"],
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
            name: 'container',
            remotes: {
                microfrontend1: 'microfrontend1@http://localhost:8081/remoteEntry.js',
                microfrontend2: 'microfrontend2@http://localhost:8082/remoteEntry.js',
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
