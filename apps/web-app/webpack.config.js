const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve('./src/index.tsx')
  },
  devServer: { 
    writeToDisk: true,
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve('./tsconfig.json'),
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        loader: 'babel-loader',
        options: {
          presets: [require.resolve('@babel/preset-react'), require.resolve('@babel/preset-typescript')]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    })
  ]
}