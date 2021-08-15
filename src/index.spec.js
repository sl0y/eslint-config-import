'use strict'; // ALWAYS


const {it, describe, expect} = require('@jest/globals');
const importPlugin = require('eslint-plugin-import');
const sortPlugin = require('eslint-plugin-simple-import-sort');
const own = require('./index.js').rules;


describe('rule', () => {

    describe.each(
        Object.keys(importPlugin.rules),
    )(
        'from import plugin with key',
        rule => {
            const key = `import/${rule}`;
            it(
                `${key} is shadowed by own rule`,
                () => void expect(own[key]).not.toEqual(void (1)),
            );
        },
    );

    describe.each(
        Object.keys(sortPlugin.rules),
    )(
        'from sort plugin with key',
        rule => {
            const key = `simple-import-sort/${rule}`;
            it(
                `${key} is shadowed by own rule`,
                () => void expect(own[key]).not.toEqual(void (1)),
            );
        },
    );

});
