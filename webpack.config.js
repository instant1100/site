const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'view/scripts'),
    filename: 'start.bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 2000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      $Time: path.resolve(__dirname, 'src/modules/Time'),
      $Jest: path.resolve(__dirname, 'src/modules/Jest'),
      $TimeTracer: path.resolve(__dirname, 'src/modules/TimeTracer'),
      $Typing: path.resolve(__dirname, 'src/modules/Typing'),
      $Lessons: path.resolve(__dirname, 'src/modules/Lessons'),
      $Tehnolog: path.resolve(__dirname, 'src/modules/Tehnolog'),
    },
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|md|png|ttf|eot|svg|woff(2)?)$/,
        type: 'asset/resource',
      },
      {
        test: /\.png/,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'inline-source-map',
  mode: 'development',
};
