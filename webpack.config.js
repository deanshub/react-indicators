var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
    // './src/sisenseIndex'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
        $: "jquery"
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015','stage-0']
      },
      include: path.join(__dirname, 'src')
    },{
      test: /\.css$/,
      loaders:['style-loader', 'css-loader']
    },{
      test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
      // loader: 'url?limit=10000&minetype=application/font-woff'
      loader: 'url?minetype=application/font-woff'
    },{
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      // loader: 'file'
      loader: 'url?minetype=application/font-eot'
    },{
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      // loader: 'url?limit=10000&minetype=image/svg+xml'
      loader: 'url?minetype=image/svg+xml'
    },{
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      // loader: 'url?limit=10000&minetype=application/octet-stream'
      loader: 'url?minetype=application/octet-stream'
    },{
      test: /\.png$/,
      // loader: 'url?limit=10000&minetype=image/png'
      loader: 'url?minetype=image/png'
    },]}
};
