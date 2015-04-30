/* global describe, it, beforeEach */

import Ipv4Address from '../ipv4-address'
import assert from 'assert'

describe('Ipv4Address()', function () {
  let addr

  beforeEach(function () {
    addr = new Ipv4Address()
  })

  describe('parts', function () {
    it('should be initialised with 0 for each part', function () {
      assert.equal(addr[0], 0)
      assert.equal(addr[1], 0)
      assert.equal(addr[2], 0)
      assert.equal(addr[3], 0)
    })

    it('should allow to modify parts', function () {
      let arr = new Array(4).fill(0)

      for (let i = 0; i < 4; ++i) {
        addr[i] = arr[i] = i + 1
        assert.deepEqual(addr, arr)
      }
      assert.deepEqual(addr, [1, 2, 3, 4])
    })

    it('should cut off numbers when too high (like Uint8Array)', function () {
      let arr = new Array(4).fill(0)

      for (let i = 0; i < 4; ++i) {
        arr[i] = i + 1
        addr[i] = arr[i] + 255 + 1
        assert.deepEqual(addr, arr)
      }
      assert.deepEqual(addr, [1, 2, 3, 4])
    })
  })

  describe('#toString()', function () {
    it('should be 0.0.0.0 when not modified', function () {
      assert.equal(addr.toString(), '0.0.0.0')
    })

    it('should work when parts are modified', function () {
      let arr = new Array(4).fill(0)

      for (let i = 0; i < 4; ++i) {
        addr[i] = arr[i] = i + 1
        assert.equal(String(addr), arr.join('.'))
      }
      assert.equal(String(addr), '1.2.3.4')
    })
  })

  describe('#keys()', function () {
    it('should work', function () {
      for (let i = 0; i < 4; ++i) {
        addr[i] = i + 10
      }

      let i = 0
      for (let key of addr.keys()) {
        assert.equal(key, i)
        ++i
      }
      assert.equal(i, 4)
    })
  })

  describe('#values()', function () {
    it('should work', function () {
      for (let i = 0; i < 4; ++i) {
        addr[i] = i + 10
      }

      let i = 0
      for (let val of addr.values()) {
        assert.equal(val, i + 10)
        ++i
      }
      assert.equal(i, 4)
    })
  })

  describe('#[Symbol.iterator]()', function () {
    it('should work', function () {
      for (let i = 0; i < 4; ++i) {
        addr[i] = i + 10
      }

      let i = 0
      for (let val of addr) {
        assert.equal(val, i + 10)
        ++i
      }
      assert.equal(i, 4)
    })
  })

  describe('#entries()', function () {
    it('should work', function () {
      for (let i = 0; i < 4; ++i) {
        addr[i] = i + 10
      }

      let i = 0
      for (let entry of addr.entries()) {
        assert.deepEqual(entry, [i, i + 10])
        ++i
      }
      assert.equal(i, 4)
    })
  })
})
