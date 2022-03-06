const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api',{
            target: 'https://ws.channels.honeycombpizza.link/',
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware('/ws', {
            target: 'wss://ws.channels.honeycombpizza.link/',
            ws: true,
            changeOrigin: true,
        })
    );
};