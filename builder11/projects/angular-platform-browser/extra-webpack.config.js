const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_platform-browser': '@angular/platform-browser',
  };
  custom.externals.push(
    '@angular/common',
    '@angular/core',
  );
  return custom;
};
