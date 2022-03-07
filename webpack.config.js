const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
  //indicates which module webpack should use to begin building out its internal dependency graph
  //Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).
  entry: {
    main: './src/index.js'
  },
  //Tells webpack where to emit the bundles it creates and how to name these files.
  //It defaults to ./ dist / main.js for the main output file and to the ./ dist folder for any other generated file.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist'),
  },
  module: {
    rules: [
      {
        //Identifies which file or files should be transformed.
        test: /\.css$/i,
        //Indicates which loader should be used to do the transforming
        use: ['style-loader','css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader']
      },
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        }
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser:{
          parse: yaml.parse,
        }
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser:{
          parse: json5.parse
        }
      }
    ],
  },
};