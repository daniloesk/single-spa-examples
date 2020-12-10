const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  singleSpaWebpackConfig.plugins.push(new SystemJSPublicPathWebpackPlugin({
    // ONLY NEEDED FOR WEBPACK 1-4. Not necessary for webpack@5
    systemjsModuleName: "@myorg/app11"
  }));

  singleSpaWebpackConfig.externals.push(
    "rxjs",
    "rxjs/operators",
    "single-spa",
    "single-spa-angular",
    /^@angular\/.*/,
  );

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
