// next.config.js
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
module.exports = withTypescript(withSass(
    {
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "_[hash:base64:9]",
        }
    }
));
