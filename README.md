# require

[![JSR](https://jsr.io/badges/@quentinadam/require)](https://jsr.io/@quentinadam/require)
[![CI](https://github.com/quentinadam/deno-require/actions/workflows/ci.yml/badge.svg)](https://github.com/quentinadam/deno-require/actions/workflows/ci.yml)

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
