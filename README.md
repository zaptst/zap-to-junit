# zap-to-junit

> Convert [ZAP](https://github.com/zaptst/zap) to JUnit

## Install

```sh
yarn add [--global] zap-to-junit
```

## Example

```sh
cat test-results.xml | zap-to-junit
```

```js
const zapToJunit = require('zap-to-junit');

process.stdin
  .pipe(zapToJunit.stream())
  .pipe(process.stdout);

zapToJunit('zap output'); // "junit output"
```
