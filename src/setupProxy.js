const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // admin 프록시 설정
    app.use(
        createProxyMiddleware('/local', {
            // target: 'http://localhost:8090',
            target: 'https://apigw-dev-admin.ktcloud.io',
            pathRewrite: {
                '^/local': ''
            },
            changeOrigin: true
        })
    )
    app.use(
        createProxyMiddleware('/dev', {
            target: 'http://admin:8081',
            pathRewrite: {
                '^/dev': ''
            },
            changeOrigin: true
        })
    )
    app.use(
        createProxyMiddleware('/pcloud', {
            target: 'http://app-admin:8081',
            pathRewrite: {
                '^/pcloud': ''
            },
            changeOrigin: true
        })
    )
    app.use(
        createProxyMiddleware('/gcloud', {
            target: 'http://admin:8081',
            pathRewrite: {
                '^/gcloud': ''
            },
            changeOrigin: true
        })
    )

    // // spring boot admin 프록시 설정
    // app.use(
    //     createProxyMiddleware('/local/sba', {
    //         target: 'http://localhost:8091',
    //         pathRewrite: {
    //             '^/local/sba': ''
    //         },
    //         changeOrigin: true
    //     })
    // )
    // app.use(
    //     createProxyMiddleware('/dev/sba', {
    //         target: 'http://admin:8091',
    //         pathRewrite: {
    //             '^/dev/sba': ''
    //         },
    //         changeOrigin: true
    //     })
    // )
    // app.use(
    //     createProxyMiddleware('/pcloud/sba', {
    //         target: 'http://app-admin:8091',
    //         pathRewrite: {
    //             '^/pcloud/sba': ''
    //         },
    //         changeOrigin: true
    //     })
    // )
    // app.use(
    //     createProxyMiddleware('/gcloud/sba', {
    //         target: 'http://admin:8091',
    //         pathRewrite: {
    //             '^/gcloud/sba': ''
    //         },
    //         changeOrigin: true
    //     })
    // )
};