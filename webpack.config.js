const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  //indicates which module webpack should use to begin building out its internal dependency graph
  //Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).
  entry: {
    main: './src/index.js',
    // Runtime code for hot module replacement
    // hot:'webpack/hot/dev-server.js',
    // client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    // Runtime code for hot module replacement
    // hot: ,
    // Dev server client for web socket transport, hot and live reload logic
    // client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  },

  //Tells webpack where to emit the bundles it creates and how to name these files.
  //It defaults to ./ dist / main.js for the main output file and to the ./ dist folder for any other generated file.
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    // client: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development environment',
    }),
    new WebpackManifestPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
  ],
};