const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){

  app.use(    
    createProxyMiddleware('/dev', {
      target: 'http://211.184.188.38:58282/', // dev backend server
      pathRewrite: {
        '^/dev': ''
      },
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware('/local', {
      target: 'http://localhost:8080/',    // local backend
      pathRewrite: {
        '^/local': ''
      },
      changeOrigin: true
    })
  );
};