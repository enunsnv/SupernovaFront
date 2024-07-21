const webpack = require('webpack');

module.exports = {
  // 다른 설정들...
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/"),
      "timers": require.resolve("timers-browserify")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
};
