/* eslint-disable max-lines */
/** @see https://github.com/import-js/eslint-plugin-import#rules */
/** @see https://github.com/lydell/eslint-plugin-simple-import-sort#usage */


'use strict'; // ALWAYS


const {OFF, WRN, ERR} = require('./constants.js');


module.exports = {

    parserOptions: {
        ecmaVersion: 2020,
        // sourceType:   'module', // or 'script'
        ecmaFeatures: {
            globalReturn:  false,
            jsx:           false,
            impliedStrict: false,
        },
    },

    env: {
        browser: true,
        node:    true,
    },

    'extends': [
        'plugin:import/recommended',
    ],

    'plugins': [
        'simple-import-sort',
        'import',
    ],

    rules: {

        // sort plugin
        'simple-import-sort/imports': OFF,
        'simple-import-sort/exports': ERR,

        // import plugin

        // off
        'import/default':                     OFF,
        'import/dynamic-import-chunkname':    OFF,
        'import/namespace':                   OFF,
        'import/no-amd':                      OFF,
        'import/no-anonymous-default-export': OFF,
        'import/no-commonjs':                 OFF,
        'import/no-cycle':                    OFF,
        'import/no-default-export':           OFF,
        'import/no-internal-modules':         OFF,
        'import/no-namespace':                OFF,
        'import/no-nodejs-modules':           OFF,
        'import/no-relative-parent-imports':  OFF,
        'import/no-restricted-paths':         OFF,
        'import/no-unresolved':               OFF,
        'import/no-unused-modules':           OFF,
        'import/unambiguous':                 OFF,

        // wrn
        'import/no-deprecated':        WRN,
        'import/no-dynamic-require':   WRN,
        'import/no-named-as-default':  WRN,
        'import/no-named-default':     WRN,
        'import/no-relative-packages': WRN,
        'import/max-dependencies':     [WRN, {'max': 10}],

        // err
        'import/exports-last':               ERR,
        'import/export':                     ERR,
        'import/extensions':                 [ERR, 'ignorePackages'],
        'import/first':                      ERR,
        'import/group-exports':              ERR,
        'import/imports-first':              ERR,
        'import/named':                      ERR,
        'import/newline-after-import':       [ERR, {'count': 2}],
        'import/no-absolute-path':           ERR,
        'import/no-duplicates':              ERR,
        'import/no-extraneous-dependencies': ERR,
        'import/no-import-module-exports':   ERR,
        'import/no-mutable-exports':         ERR,
        'import/no-named-as-default-member': ERR,
        'import/no-named-export':            ERR,
        'import/no-self-import':             ERR,
        'import/no-unassigned-import':       ERR,
        'import/no-useless-path-segments':   ERR,
        'import/no-webpack-loader-syntax':   ERR,
        'import/order':                      [ERR, {'newlines-between': 'never'}],
        'import/prefer-default-export':      ERR,
    },
};
