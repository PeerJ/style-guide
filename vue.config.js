let path = require("path");
const scssPath = path.resolve(__dirname, "../", "src", "scss");

module.exports = {
  configureWebpack: {
    devtool: "source-map",
  },

  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
  transpileDependencies: ["vuetify"],
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import '~@/variables.sass'`,
  //     },
  //   },
  // },
};
