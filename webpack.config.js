const path = require('path')
const abs = (...args) => path.resolve(__dirname, ...args)

module.exports = (env, argv) => ({

  devtool: 'source-map',

  output: argv.mode === 'production' ? {
    filename: 'fs-modal.js',
    path: abs('public/'),
    library: 'fs-modal',
    libraryTarget: 'umd',
  } : {
    filename: 'fs-modal.js',
  },

  devServer: {
    contentBase: abs('public/'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          abs('./src'),
        ],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?{"modules": {"localIdentName": "[path][name]__[local]"}}',
        ],
      },
    ],
  },

  resolve: {
    modules: [
      abs('src'),  // Enable absolute imports relative to the src/ directory.
      abs('node_modules'),
    ],
  },

})
