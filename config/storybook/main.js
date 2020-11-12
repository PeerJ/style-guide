let path = require("path");

module.exports = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],

  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-backgrounds",
    "@storybook/addon-toolbars",
  ],
  // webpackFinal: async (config, { configType }) => {
  //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  //   // You can change the configuration based on that.
  //   // 'PRODUCTION' is used when building the static version of storybook.

  //   // Make whatever fine-grained changes you need
  //   // config.module.rules.push({
  //   //   test: /\.scss$/,
  //   //   use: ['style-loader', 'css-loader', 'sass-loader'],
  //   //   include: path.resolve(__dirname, '../'),
  //   // });

  //   const scssPath = path.resolve(__dirname, "../", "src", "scss");
  //   console.log("scssPath", scssPath);

  //   config.module.rules = config.module.rules.filter(
  //     (rule) => !rule.test.test(".scss")
  //   );

  //   config.module.rules.push(
  //     {
  //       test: /\.s(a|c)ss$/,
  //       use: [
  //         "vue-style-loader",
  //         "css-loader",
  //         {
  //           loader: "sass-loader",
  //           options: {
  //             prependData: `@import '${path.resolve(
  //               __dirname,
  //               "../",
  //               "src",
  //               "scss"
  //             )}/variables.scss'`,
  //           },
  //         },
  //       ],
  //       include: [path.resolve(__dirname, "../")],
  //     }
  //     // {
  //     //   test: /\.scss$/,
  //     //   use: [
  //     //     "vue-style-loader",
  //     //     "css-loader",
  //     //     {
  //     //       loader: "sass-loader",
  //     //       options: {
  //     //         implementation: require("sass"),
  //     //         data: `
  //     //         @import '@/scss/variables.scss';
  //     //       `,
  //     //       },
  //     //     },
  //     //   ],
  //     // }
  //   );

  //   // Return the altered config
  //   return config;
  // },
};
