module.exports = {
  entry : {
    main: "./main.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  mode: "development",
  optimization: {
    minimize: false
  }
};