const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/devApi', {
    target: process.env.VUE_APP_API_BASE_URL,
    changeOrigin: true,
    pathRewrite: { 
      '^/devApi': '', 
    }
  }));
};