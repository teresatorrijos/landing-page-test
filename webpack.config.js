module.exports = {
  resolve: {
    extensions: ['', '.js']
  },
  context: __dirname,
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: './build',
    filename: 'app.js',
    publicPath: '/build/'
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },
  module: {
    loaders: [{
      test: /(\.js|.jsx)$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'stage-2']
      }
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',
      exclude: /node_modules/
    }]
  }
};
