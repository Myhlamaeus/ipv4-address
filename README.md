# ipv4-address [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> A single IPv4 address

## Installation

```sh
$ npm install --save ipv4-address
```

## Usage

```js
import toIPv4Address from "ipv4-address";
const toIPv4Address = require("ipv4-address");

toIPv4Address([127, 0, 0, 1]); // [0, 0, 0, 0]
toIPv4Address("255.256.300.3000"); // [255, 255, 255, 255]
toIPv4Address("0.0.0.0"); // [0, 0, 0, 0]
toIPv4Address("127.0.0.1").toString(); // "127.0.0.1"
toIPv4Address("0.0.0"); // Throws an error (not long enough)
toIPv4Address("0.0.0.0.0"); // Throws an error (too long)
```

```js
import IPv4Address from "ipv4-address/IPv4Address"; // Extends Uint8Array
const IPv4Address = require("ipv4-address/IPv4Address"); // Extends Uint8Array

new IPv4Address([0, 0, 0, 0]); // [0, 0, 0, 0]
IPv4Address.parse("127.0.0.1"); // [127, 0, 0, 0]
IPv4Address.from([127, 0, 0, 1]); // [127, 0, 0, 0]
IPv4Address.of(127, 0, 0, 1); // [127, 0, 0, 0]
new IPv4Address([0, 0, 0]); // Throws an error (not long enough)
new IPv4Address([0, 0, 0, 0, 0]); // Throws an error (too long)
```

## License

MIT © [Malte-Maurice Dreyer](https://github.com/Myhlamaeus)

[npm-image]: https://badge.fury.io/js/ipv4-address.svg
[npm-url]: https://npmjs.org/package/ipv4-address
[travis-image]: https://travis-ci.org/Myhlamaeus/ipv4-address.svg?branch=master
[travis-url]: https://travis-ci.org/Myhlamaeus/ipv4-address
[daviddm-image]: https://david-dm.org/Myhlamaeus/ipv4-address.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Myhlamaeus/ipv4-address
[coveralls-image]: https://coveralls.io/repos/Myhlamaeus/ipv4-address/badge.svg
[coveralls-url]: https://coveralls.io/r/Myhlamaeus/ipv4-address
