'use strict'; // ALWAYS


// noinspection JSUnusedGlobalSymbols
module.exports = ({

    testMatch: [
        '<rootDir>/(src|tst)/**/*.(spec|test).js',
    ],

    coverageReporters: [
        'json',
        'lcov',
        'text-summary',
    ],

    collectCoverageFrom: ['src/**/*.js'],

});
