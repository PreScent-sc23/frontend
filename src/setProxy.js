const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    // '/',
    createProxyMiddleware({
      target: 'http://3.36.175.224:8080',
      changeOrigin: true,
    })
  );
};