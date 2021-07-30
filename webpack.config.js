const path = require('path');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        home: './src/Home.js',
        about: './src/About.js',
        nav: './src/Nav.js',
        footer: './src/Footer.js',
        not_found: './src/NotFound.js'
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/widgets'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ 
            filename: 'home.html',
            template: './src/templates/home.html',
            chunks: ['index', 'home']
        }),
        new HtmlWebpackPlugin({ 
            filename: 'about.html',
            template: './src/templates/about.html',
            chunks: ['index', 'about']
        }),
        new HtmlWebpackPlugin({ 
            filename: 'nav.html',
            template: './src/templates/nav.html',
            chunks: ['index', 'nav']
        }),
        new HtmlWebpackPlugin({ 
            filename: 'footer.html',
            template: './src/templates/footer.html',
            chunks: ['index', 'footer']
        }),
        new HtmlWebpackPlugin({ 
            filename: 'not-found.html',
            template: './src/templates/not-found.html',
            chunks: ['index', 'not_found']
        }),
    ]
}
