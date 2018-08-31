const merge = require('webpack-merge');
const webpack = require("webpack");
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    hot: true,
    contentBase: "dist"
	},
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
			  use:  [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
			},
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
});
