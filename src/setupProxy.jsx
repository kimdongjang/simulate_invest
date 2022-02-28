const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api',{
            target: 'https://simulator.honeycombpizza.link/',
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware('/ws', {
            target: 'wss://simulator.honeycombpizza.link/',
            ws: true,
            changeOrigin: true,
        })
    );
};