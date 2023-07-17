const { environment } = require('@rails/webpacker')
const webpack = require("webpack");

environment.plugins.prepend(
  "Provide",
  new webpack.ProvidePlugin({
    ActionCable: "@rails/actioncable",
  })
);
module.exports = environment
