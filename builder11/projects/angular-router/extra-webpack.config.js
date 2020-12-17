const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_router': '@angular/router',
  };
  custom.externals.push(
    'rxjs',
    'rxjs/operators',
    '@angular/common',
    '@angular/core',
  );
  return custom;
};
