const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_core': '@angular/core',
  };
  custom.externals.push(
    'rxjs',
    'rxjs/operators',
  );
  return custom;
};
