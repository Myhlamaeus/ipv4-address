import Ipv4Address from "../ipv4-address";
import assert from "assert";

/* global describe, it, beforeEach */

describe("Ipv4Address()", function() {
    let addr;

    beforeEach(function() {
        addr = new Ipv4Address();
    });

    it("should be initialised with 0 for each part", function() {
        assert.equal(addr[0], 0);
        assert.equal(addr[1], 0);
        assert.equal(addr[2], 0);
        assert.equal(addr[3], 0);
    });

    it("should be 0.0.0.0 when cast to string", function() {
        assert.equal(String(addr), "0.0.0.0");
    });

    it("should allow to modify parts", function() {
        let arr = new Array(4).fill(0);

        for(let i = 0; i < 4; ++i) {
            addr[i] = arr[i] = i + 1;
            assert.deepEqual(addr, arr);
        }
        assert.deepEqual(addr, [1,2,3,4]);
    });

    it("should correctly stringify when parts are modified", function() {
        let arr = new Array(4).fill(0);

        for(let i = 0; i < 4; ++i) {
            addr[i] = arr[i] = i + 1;
            assert.equal(String(addr), arr.join("."));
        }
        assert.equal(String(addr), "1.2.3.4");
    });

    it("should cut off numbers when to high (like Uint8Array)", function() {
        let arr = new Array(4).fill(0);

        for(let i = 0; i < 4; ++i) {
            arr[i] = i + 1;
            addr[i] = arr[i] + 255 + 1;
            assert.deepEqual(addr, arr);
        }
        assert.deepEqual(addr, [1,2,3,4]);
    });

    it("should be iterable", function() {
        for(let i = 0; i < 4; ++i) {
            addr[i] = i + 10;
        }

        let i = 0;
        for(let key of addr.keys()) {
            assert.equal(key, i);
            ++i;
        }
        assert.equal(i, 4);
        i = 0;
        for(let value of addr.values()) {
            assert.equal(value, i + 10);
            ++i;
        }
        assert.equal(i, 4);
        i = 0;
        for(let value of addr) {
            assert.equal(value, i + 10);
            ++i;
        }
        assert.equal(i, 4);
        i = 0;
        for(let entry of addr.entries()) {
            assert.deepEqual(entry, [i, i + 10]);
            ++i;
        }
        assert.equal(i, 4);
    });
});
