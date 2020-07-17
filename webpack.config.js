const path = require('path');

module.exports = {
  entry: './src/canvas.js',
  output: {
    path: path.resolve(__dirname, 'app',),
    filename: './bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  resolve: {
    extensions: [".js", '.jsx', 'mjs', '*']
  }
}; 