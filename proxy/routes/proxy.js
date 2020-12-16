const { createProxyMiddleware } = require('http-proxy-middleware');

/*
 * Proxy each application to its port and everything else to jsdelivr.
 * This will serve scripts under /angular10/shared and /angular11/shared as needed.
 */
const proxy = createProxyMiddleware({
  changeOrigin: true,
  logLevel: 'debug',
  pathRewrite: {
    '^/[^/]+/[^/]+' : ''
  },
  router: {
    '/angular11/app11': 'http://localhost:4200',
  },
  target: 'https://cdn.jsdelivr.net',
});

module.exports = {
  proxy,
};
