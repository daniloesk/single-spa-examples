const { inspect } = require('util');
const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // jsonpFunction removed on webpack 5
  delete singleSpaWebpackConfig.output.jsonpFunction;

  singleSpaWebpackConfig.entry = {
    angular_common: '@angular/common',
    angular_core: '@angular/core',
    'angular_platform-browser': '@angular/platform-browser',
    angular_router: '@angular/router',
    rxjs: 'rxjs',
    'rxjs_operators': 'rxjs/operators',
    'single-spa': 'single-spa',
    'single-spa-angular': 'single-spa-angular',
  };
  console.log(`entry: ${inspect(singleSpaWebpackConfig.entry, { depth: 10, })}`);

  singleSpaWebpackConfig.optimization.runtimeChunk = 'single';
  console.log(`optimization: ${inspect(singleSpaWebpackConfig.optimization, { depth: 10, })}`);

  return singleSpaWebpackConfig;
};
