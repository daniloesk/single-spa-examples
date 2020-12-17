const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_common': '@angular/common',
  };
  custom.externals.push(
    '@angular/core',
  );
  return custom;
};
