#!/usr/bin/env node

'use strict';

const
    meow = require('meow'),
    osProxy = require('os-proxy'),
    cli = meow(`
        Usage
          $ os-proxy <command> [host]

        Command
          set      Change the configured system proxy.
          get      Show the currently set proxy.
          enable   Turn on the currently set proxy.
          disable  Turn off the currently set proxy.
          toggle   Enable or disable the proxy to the opposite state.
          clear    Disable and also delete the proxy.

        Example
          $ os-proxy set --hostname=localhost --port=1234
          $ os-proxy get
          localhost:1234
    `),
    action = cli.input[0];

if (!action) {
    console.error('Please provide a proxy action.');
    process.exit(1);
}

if (!/^(?:set|get|enable|disable|toggle|clear)/.test(action)) {
    console.error('Invalid proxy action.');
    process.exit(1);
}

osProxy[action](cli.flags).then((proxy) => {
    if (proxy) {
        console.log(`${proxy.hostname}:${proxy.port}`);
    }
});
