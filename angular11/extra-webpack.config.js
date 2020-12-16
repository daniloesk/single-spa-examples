const { inspect } = require('util');
const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // jsonpFunction removed on webpack 5
  delete singleSpaWebpackConfig.output.jsonpFunction;

  singleSpaWebpackConfig.entry = {
    angular_common: {
      import: '@angular/common',
      dependOn: 'angular_core',
    },
    angular_core: {
      import: '@angular/core',
      dependOn: 'rxjs',
    },
    'angular_platform-browser': {
      import: '@angular/platform-browser',
      dependOn: 'angular_common',
    },
    angular_router: {
      import: '@angular/router',
      dependOn: 'angular_common',
    },
    rxjs: 'rxjs',
    'rxjs_operators': {
      import: 'rxjs/operators',
      dependOn: 'rxjs',
    },
    'single-spa': 'single-spa',
    'single-spa-angular': {
      import: 'single-spa-angular',
      dependOn: 'angular_common',
    },
  };
  console.log(`entry: ${inspect(singleSpaWebpackConfig.entry, { depth: 10, })}`);

  singleSpaWebpackConfig.optimization.runtimeChunk = 'single';
  console.log(`optimization: ${inspect(singleSpaWebpackConfig.optimization, { depth: 10, })}`);

  return singleSpaWebpackConfig;
};
