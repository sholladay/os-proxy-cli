#!/usr/bin/env node

'use strict';

const
    meow = require('meow'),
    osProxy = require('os-proxy'),
    cli = meow(`
        Usage
          $ os-proxy <set|get|enable|disable>

        Example
          $ os-proxy set localhost:1234
    `),
    action = cli.input[0];

if (!action) {
    console.error('Please provide a proxy action.');
    process.exit(1);
}

if (!/^(?:set|get|enable|disable)/.test(action)) {
    console.error('Invalid proxy action.');
    process.exit(1);
}

osProxy[action](cli.flags).then((proxy) => {
    if (proxy) {
        console.log(`${proxy.hostname}:${proxy.port}`);
    }
});
