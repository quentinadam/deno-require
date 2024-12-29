# @quentinadam/require

[![JSR][jsr-image]][jsr-url] [![NPM][npm-image]][npm-url] [![CI][ci-image]][ci-url]

A simple function that returns and requires that a value is not undefined or null.

## Usage

```ts
import require from '@quentinadam/require';

const a = require(1); // doesn't throw

const b = require(undefined); // throws an AssertionError

require(undefined, 'message'); // throws an AssertionError with a custom error message

require(undefined, new Error('message')); // throws a custom Error

const value: string | undefined = 'hello';
const narrowedValue = require(value); // narrows the type of value to string;
value.toUpperCase(); // works
```

[ci-image]: https://img.shields.io/github/actions/workflow/status/quentinadam/deno-require/ci.yml?branch=main&logo=github&style=flat-square
[ci-url]: https://github.com/quentinadam/deno-require/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/@quentinadam/require.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@quentinadam/require
[jsr-image]: https://jsr.io/badges/@quentinadam/require?style=flat-square
[jsr-url]: https://jsr.io/@quentinadam/require
