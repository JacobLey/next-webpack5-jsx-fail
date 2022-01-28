'use strict';

module.exports = {
    webpack: (defaultConfig, opts) => {

        defaultConfig.module.rules.push({
            test: {
                and: [
                    /\.jsx?$/,
                    path => !path.includes('node_modules'),
                ],
            },
            include: ['/'],
            use: [opts.defaultLoaders.babel],
        });

        return defaultConfig;
    },
};
