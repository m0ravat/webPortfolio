const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of your application
  entry: './src/index.js',
  output: {
    // Output directory for bundled files
    path: path.resolve(__dirname, 'dist'),
    // Output filename
    filename: 'bundle.js',
    // Public path (if needed)
    publicPath: '',
  },
  plugins: [
    // Plugin to generate index.html
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  // Other webpack configurations (loaders, etc.)
  module: {
    rules: [
      // Rules for CSS, images, etc.
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
};

