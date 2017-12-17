const assert = require('assert');
const IPv4Address = require('../IPv4Address');

describe('IPv4Address()', () => {
  let addr;

  beforeEach(() => {
    addr = new IPv4Address();
  });

  describe('parts', () => {
    it('should be initialised with 0 for each part', () => {
      assert.equal(addr[0], 0);
      assert.equal(addr[1], 0);
      assert.equal(addr[2], 0);
      assert.equal(addr[3], 0);
    });

    it('should allow to modify parts', () => {
      let arr = new Array(4).fill(0);

      for (let i = 0; i < 4; ++i) {
        arr[i] = i + 1;
        addr[i] = arr[i];
        assert.deepEqual(addr, arr);
      }
      assert.deepEqual(addr, [1, 2, 3, 4]);
    });

    it('should cut off numbers when too high (like Uint8ClampedArray)', () => {
      let arr = new Array(4).fill(0);

      for (let i = 0; i < 4; ++i) {
        arr[i] = i;
        addr[i] = arr[i] + 256;
        assert.deepEqual(addr, arr);
      }

      assert.deepEqual(addr, arr);
    });
  });

  describe('#toString()', () => {
    it('should be 0.0.0.0 when not modified', () => {
      assert.equal(String(addr), '0.0.0.0');
    });

    it('should work when parts are modified', () => {
      let arr = new Array(4).fill(0);

      for (let i = 0; i < 4; ++i) {
        arr[i] = i + 1;
        addr[i] = arr[i];
        assert.equal(String(addr), arr.join('.'));
      }
      assert.equal(String(addr), '1.2.3.4');
    });
  });

  describe('#keys()', () => {
    it('should work', () => {
      for (let i = 0; i < 4; ++i) {
        addr[i] = i + 10;
      }

      let i = 0;
      for (let key of addr.keys()) {
        assert.equal(key, i);
        ++i;
      }
      assert.equal(i, 4);
    });
  });

  describe('#values()', () => {
    it('should work', () => {
      for (let i = 0; i < 4; ++i) {
        addr[i] = i + 10;
      }

      let i = 0;
      for (let val of addr.values()) {
        assert.equal(val, i + 10);
        ++i;
      }
      assert.equal(i, 4);
    });
  });

  describe('#[Symbol.iterator]()', () => {
    it('should work', () => {
      for (let i = 0; i < 4; ++i) {
        addr[i] = i + 10;
      }

      let i = 0;
      for (let val of addr) {
        assert.equal(val, i + 10);
        ++i;
      }
      assert.equal(i, 4);
    });
  });

  describe('#entries()', () => {
    it('should work', () => {
      for (let i = 0; i < 4; ++i) {
        addr[i] = i + 10;
      }

      let i = 0;
      for (let entry of addr.entries()) {
        assert.deepEqual(entry, [i, i + 10]);
        ++i;
      }
      assert.equal(i, 4);
    });
  });
});
