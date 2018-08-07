#!/usr/bin/env node
'use strict';
const meow = require('meow');
const zapToJunit = require('./');

const cli = meow({
  help: `
    Usage
      $ ... | zap-to-junit
  `,
});

process.stdin
  .pipe(zapToJunit.stream())
  .pipe(process.stdout);
