import { setExpectedLength } from 'fixed-length-arrays/lib/factory';
import FixedLengthUint8Array from 'fixed-length-arrays/lib/FixedLengthUint8Array';

const separator = '.';

export default class IPv4Address extends FixedLengthUint8Array {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      const dataView = new DataView(this.buffer);

      return dataView.getUint32(this.byteOffset);
    }

    return this.join(separator);
  }
}

setExpectedLength(IPv4Address, 4);

Object.defineProperties(IPv4Address, {
  parse: {
    value(str) {
      const parts = String(str)
        .split(separator)
        .map(Number);

      if (parts.some(part => isNaN(part))) {
        throw new TypeError("Some parts of the IP address aren't numbers");
      }

      return new this(parts);
    },
    writable: true,
    configurable: true
  }
});
