const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  //indicates which module webpack should use to begin building out its internal dependency graph
  //Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).
  entry: {
    main: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
    new WebpackManifestPlugin()
  ],
  //Tells webpack where to emit the bundles it creates and how to name these files.
  //It defaults to ./ dist / main.js for the main output file and to the ./ dist folder for any other generated file.
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'dist'),
    clean: true,
  },
};