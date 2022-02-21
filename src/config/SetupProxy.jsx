const createProxyMiddleware = require('http-proxy-middleware')

module.exports = app => {
    app.use(
        createProxyMiddleware(
            '/api',
            {
                target: 'https://ws.channels.honeycombpizza.link/',
                changeOrigin: true,
            }
        )
    )
}