const path = require('path');
console.log(path.resolve(__dirname, 'src/module/TimeTracer'));

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'view/scripts'),
        filename: 'start.bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 2000
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '$TimeTracer': path.resolve(__dirname, 'src/modules/TimeTracer')
        }
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /.md$/,
                loader: 'raw-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: "url-loader?limit=60000"
            },
        ]
    },
    devtool: 'eval-source-map',
    mode: 'development'
};