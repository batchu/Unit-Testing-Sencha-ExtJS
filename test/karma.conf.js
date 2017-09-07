module.exports = function (config) {
    config.set({

        basePath: '../',
        frameworks: ['jasmine', "karma-typescript"],
        plugins: [
            'karma-typescript',
            'karma-coverage',
            'karma-jasmine',
            'karma-chrome-launcher'
        ],
        files: [
            'https://cdnjs.cloudflare.com/ajax/libs/extjs/6.2.0/ext-all-debug.js',
            'test/spec/lib/**/*.ts',
            'app/**/*.js',
            'test/spec/**/*.spec.ts'
        ],
        preprocessors : {
            'app/view/**/*.js': 'coverage',
            "**/*.ts": ["karma-typescript"]
        },
        proxies: {
            '/SuperHeroes/': '/base/app/',
            '/OfiUtils/': '/base/test/spec/tag-ui/lib/',
            '/Ext/': '/base/ext/'
        },


        exclude: [],

        reporters: ['progress',"karma-typescript"],
        // reporters: ['progress', "karma-typescript"],
        // web server port
        port: 9876,
        coverageReporter :{
            type: 'html',
            dir: 'coverage/'
        },
        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
        karmaTypescriptConfig: {
            tsconfig: "./test/tsconfig.json"
        }
    })
}
