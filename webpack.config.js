const path = require('path');

module.exports = {
  entry: './src/main/resources/static/js/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'src/main/resources/static/js'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};