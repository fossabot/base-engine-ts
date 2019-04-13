const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: ['./app.ts']
  },
  output: {
    path: path.resolve(__dirname, '../assets')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['ts-loader', 'eslint-loader']
      },
      {
        test: /\.(png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[md5:hash:hex:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|otf|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'fonts/[name].[md5:hash:hex:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|ogg|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[md5:hash:hex:8].[ext]'
            }
          }
        ]
      }
    ]
  }
};
