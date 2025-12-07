// defaultTo.test.js
// Jenny
import { expect } from 'chai';
import defaultTo from '../src/defaultTo.js';

// See documentation 4.1 Detailed test case design 
describe('defaultTo(value, defaultValue): Manual test cases', function () {

  describe('Valid values return the value', function () {

    describe('Numerical value types', function () {

      it('should return value 5', function () {
        expect(defaultTo(5, 10)).to.equal(5); // TC-DT-0
      });

      it('should return value -1', function () {
        expect(defaultTo(-1, 10)).to.equal(-1); // TC-DT-4
      });

      it('should return value 0', function () {
        expect(defaultTo(0, 10)).to.equal(0); // TC-DT-5
      });

      it('should return value 1.2', function () {
        expect(defaultTo(1.2, 10)).to.equal(1.2); // TC-DT-17
      });

      it('should return value -1.7', function () {
        expect(defaultTo(-1.7, 10)).to.equal(-1.7); // TC-DT-18
      });

      it('should return value 0.0', function () {
        expect(defaultTo(0.0, 10)).to.equal(0.0); // TC-DT-19
      });

      it('should return value 8, when value is (3+5)', function () {
        expect(defaultTo(3 + 5, 10)).to.equal(8); // TC-DT-20
      });
    });

    describe('Invalid inputs (NaN, null & undefined) return defaultValue', function () {

      it('should return defaultValue 10 when value is NaN', function () {
        expect(defaultTo(NaN, 10)).to.equal(10); // TC-DT-1
      });

      it('should return defaultValue 10 when value is null', function () {
        expect(defaultTo(null, 10)).to.equal(10); // TC-DT-2
      });

      it('should return defaultValue 10 when value is undefined', function () {
        expect(defaultTo(undefined, 10)).to.equal(10); // TC-DT-3
      });
    });

    describe('Non-numerical values should return defaultValue', function () {
      // NOTE: Implementation documentation does not specify that non-numerical values
      // are not accepted. However, the test documentation has the incorrect assumption
      // that non-numerical values are not valid values. These tests follow the assumption
      // of the test documentaion.
      // FIX: The test documentation or the implementation should be fixed.
      // If these tests pass, the implementation has been fixed.

      it('should return defaultValue 10 when value is empty string ""', function () {
        expect(defaultTo("", 10)).to.equal(10); // TC-DT-7
      });

      it('should return defaultValue 10 when value is string "3"', function () {
        expect(defaultTo("3", 10)).to.equal(10); // TC-DT-8
      });

      it('should return defaultValue 10 when value is boolean value true', function () {
        expect(defaultTo(true, 10)).to.equal(10); // TC-DT-9
      });

      it('should return defaultValue 10 when value is boolean value false', function () {
        expect(defaultTo(false, 10)).to.equal(10); // TC-DT-10
      });

      it('should return defaultValue 1 when value is array [1, 2, 3]', function () {
        expect(defaultTo([1, 2, 3], 1)).to.equal(1); // TC-DT-14
      });
    });

    describe('Valid defaultValues', function () {
      
      it('should return defaultValue -1 when value is null', function () {
        expect(defaultTo(null, -1)).to.equal(-1); // TC-DT-15
      });

      it('should return defaultValue 0 when value is null', function () {
        expect(defaultTo(null, 0)).to.equal(0); // TC-DT-16
      });

      it('should return defaultValue 10 when defaultValue is 5+5 and value is null', function () {
        expect(defaultTo(null, 5 + 5)).to.equal(10); // TC-DT-21
      });
    });
  });

  describe('Invalid defaultValue types', function () {

    it('should throw an error when value is null and defaultValue is "Hello"', function () {
      expect(() => defaultTo(null, "Hello")).to.throw(); // TC-DT-11
    });

    it('should throw an error when value is null and defaultValue is boolean true', function () {
      expect(() => defaultTo(null, true)).to.throw(); // TC-DT-12
    });

    it('should throa an error when value is null and defaultValue is an array [1, 2 ,3]', function () {
      expect(() => defaultTo(null, [1, 2, 3])).to.throw(); // TC-DT-13
    });
  });
  });

  describe('Both parameters invalid', function () {

    it('should throw error when both value and defaultValues are NaN', function () {
      expect(() => defaultTo(NaN, NaN)).to.throw(); // TC-DT-6
    });

    it('should throw an error when both value and defaultValues are null', function () {
      expect(() => defaultTo(null, null)).to.throw(); // TC-DT-22
    });

    it('should throw an error when bot value and defaultValues are undefined', function () {
      expect(() => defaultTo(undefined, undefined)).to.throw(); // TC-DT-23
    });
});



// CLAUDE GENERATED TESTS: used two prompts, after which the code has been copy pasted here 
// (changed only the mention of AI generated test into description)
//
// Prompt 1: Read defaultTo.js and write test cases for it in defaultTo.test.js 
// "import { expect } from 'chai'; 
//  import defaultTo from '../src/defaultTo.js';".
// Make sure that the code is readable, there are enought descriptive testsuites and cover all important test cases.
//
// Prompt 2: is this enough testcases to make sure the code is ready for prod?

describe('defaultTo(value, defaultValue): AI generated test cases', () => {
  describe('when value is null or undefined', () => {
    it('should return defaultValue when value is null', () => {
      const result = defaultTo(null, 10);
      expect(result).to.equal(10);
    });

    it('should return defaultValue when value is undefined', () => {
      const result = defaultTo(undefined, 10);
      expect(result).to.equal(10);
    });

    it('should return defaultValue when value is explicitly undefined', () => {
      const result = defaultTo(void 0, 'default');
      expect(result).to.equal('default');
    });
  });

  describe('when value is NaN', () => {
    it('should return NaN value (not defaultValue) - documents current behavior', () => {
      // NOTE: Documentation says NaN should return defaultValue, but implementation
      // only checks for null/undefined. This test documents actual behavior.
      const result = defaultTo(NaN, 10);
      expect(result).to.be.NaN;
    });

    it('should return value when value is result of invalid operation', () => {
      const result = defaultTo(0 / 0, 'default');
      expect(result).to.be.NaN;
    });
  });

  describe('when value is a valid number', () => {
    it('should return value when value is a positive number', () => {
      const result = defaultTo(1, 10);
      expect(result).to.equal(1);
    });

    it('should return value when value is zero', () => {
      const result = defaultTo(0, 10);
      expect(result).to.equal(0);
    });

    it('should return value when value is a negative number', () => {
      const result = defaultTo(-5, 10);
      expect(result).to.equal(-5);
    });

    it('should return value when value is a float', () => {
      const result = defaultTo(3.14, 10);
      expect(result).to.equal(3.14);
    });

    it('should return value when value is Infinity', () => {
      const result = defaultTo(Infinity, 10);
      expect(result).to.equal(Infinity);
    });

    it('should return value when value is -Infinity', () => {
      const result = defaultTo(-Infinity, 10);
      expect(result).to.equal(-Infinity);
    });
  });

  describe('when value is a boolean', () => {
    it('should return value when value is true', () => {
      const result = defaultTo(true, false);
      expect(result).to.be.true;
    });

    it('should return value when value is false', () => {
      const result = defaultTo(false, true);
      expect(result).to.be.false;
    });
  });

  describe('when value is a string', () => {
    it('should return value when value is a non-empty string', () => {
      const result = defaultTo('hello', 'default');
      expect(result).to.equal('hello');
    });

    it('should return value when value is an empty string', () => {
      const result = defaultTo('', 'default');
      expect(result).to.equal('');
    });

    it('should return value when value is a whitespace string', () => {
      const result = defaultTo('   ', 'default');
      expect(result).to.equal('   ');
    });
  });

  describe('when value is an object', () => {
    it('should return value when value is an empty object', () => {
      const obj = {};
      const result = defaultTo(obj, { default: true });
      expect(result).to.equal(obj);
    });

    it('should return value when value is a non-empty object', () => {
      const obj = { key: 'value' };
      const result = defaultTo(obj, {});
      expect(result).to.equal(obj);
    });

    it('should return value when value is an array', () => {
      const arr = [1, 2, 3];
      const result = defaultTo(arr, []);
      expect(result).to.equal(arr);
    });

    it('should return value when value is an empty array', () => {
      const arr = [];
      const result = defaultTo(arr, [1, 2, 3]);
      expect(result).to.equal(arr);
    });
  });

  describe('when value is a function', () => {
    it('should return value when value is a function', () => {
      const fn = () => 'test';
      const result = defaultTo(fn, () => 'default');
      expect(result).to.equal(fn);
    });
  });

  describe('edge cases with different default values', () => {
    it('should return defaultValue when value is null and defaultValue is null', () => {
      const result = defaultTo(null, null);
      expect(result).to.be.null;
    });

    it('should return defaultValue when value is undefined and defaultValue is undefined', () => {
      const result = defaultTo(undefined, undefined);
      expect(result).to.be.undefined;
    });

    it('should return defaultValue when value is null and defaultValue is an object', () => {
      const defaultObj = { key: 'value' };
      const result = defaultTo(null, defaultObj);
      expect(result).to.equal(defaultObj);
    });

    it('should work with complex default values', () => {
      const complexDefault = { nested: { value: [1, 2, 3] } };
      const result = defaultTo(undefined, complexDefault);
      expect(result).to.deep.equal(complexDefault);
    });
  });

  describe('symbol and BigInt values', () => {
    it('should return value when value is a Symbol', () => {
      const sym = Symbol('test');
      const result = defaultTo(sym, Symbol('default'));
      expect(result).to.equal(sym);
    });

    it('should return value when value is a BigInt', () => {
      const bigInt = BigInt(123);
      const result = defaultTo(bigInt, BigInt(456));
      expect(result).to.equal(bigInt);
    });

    it('should return value when BigInt is zero', () => {
      const result = defaultTo(BigInt(0), BigInt(999));
      expect(result).to.equal(BigInt(0));
    });
  });

  describe('missing or insufficient arguments', () => {
    it('should return undefined when called with no arguments', () => {
      const result = defaultTo();
      expect(result).to.be.undefined;
    });

    it('should return undefined when called with only one argument that is undefined', () => {
      const result = defaultTo(undefined);
      expect(result).to.be.undefined;
    });

    it('should return undefined when called with only one argument that is null', () => {
      const result = defaultTo(null);
      expect(result).to.be.undefined;
    });

    it('should return value when called with only one argument that is a valid value', () => {
      const result = defaultTo(42);
      expect(result).to.equal(42);
    });
  });

  describe('type coercion with loose equality (==)', () => {
    it('should handle null == undefined equivalence', () => {
      // Both null and undefined are caught by `value == null`
      expect(defaultTo(null, 'default')).to.equal('default');
      expect(defaultTo(undefined, 'default')).to.equal('default');
    });

    it('should not treat 0 as null or undefined', () => {
      const result = defaultTo(0, 100);
      expect(result).to.equal(0);
    });

    it('should not treat false as null or undefined', () => {
      const result = defaultTo(false, true);
      expect(result).to.equal(false);
    });

    it('should not treat empty string as null or undefined', () => {
      const result = defaultTo('', 'default');
      expect(result).to.equal('');
    });
  });

  describe('immutability and reference preservation', () => {
    it('should not modify the original value object', () => {
      const original = { a: 1, b: 2 };
      const result = defaultTo(original, { c: 3 });
      expect(result).to.equal(original);
      expect(original).to.deep.equal({ a: 1, b: 2 });
    });

    it('should not modify the default value object when not used', () => {
      const defaultValue = { x: 10 };
      defaultTo({ y: 20 }, defaultValue);
      expect(defaultValue).to.deep.equal({ x: 10 });
    });

    it('should preserve object references', () => {
      const obj = { key: 'value' };
      const result = defaultTo(obj, {});
      expect(result).to.equal(obj);
      expect(result === obj).to.be.true;
    });
  });

  describe('real-world usage patterns', () => {
    it('should work in a configuration object scenario', () => {
      function createConfig(userConfig) {
        return {
          timeout: defaultTo(userConfig?.timeout, 3000),
          retries: defaultTo(userConfig?.retries, 3),
          debug: defaultTo(userConfig?.debug, false)
        };
      }

      const config1 = createConfig({ timeout: 5000 });
      expect(config1.timeout).to.equal(5000);
      expect(config1.retries).to.equal(3);
      expect(config1.debug).to.equal(false);

      const config2 = createConfig(null);
      expect(config2.timeout).to.equal(3000);
      expect(config2.retries).to.equal(3);
      expect(config2.debug).to.equal(false);
    });

    it('should work in a chain of optional values', () => {
      const data = { user: null };
      const username = defaultTo(data?.user?.name, 'Anonymous');
      expect(username).to.equal('Anonymous');
    });

    it('should work with API responses that may be null', () => {
      function processResponse(response) {
        return {
          status: defaultTo(response?.status, 'unknown'),
          data: defaultTo(response?.data, []),
          message: defaultTo(response?.message, 'No message')
        };
      }

      const result = processResponse(null);
      expect(result.status).to.equal('unknown');
      expect(result.data).to.deep.equal([]);
      expect(result.message).to.equal('No message');
    });
  });

  describe('performance characteristics', () => {
    it('should handle a large number of calls efficiently', () => {
      const iterations = 100000;
      const start = Date.now();

      for (let i = 0; i < iterations; i++) {
        defaultTo(i % 2 === 0 ? i : null, 0);
      }

      const duration = Date.now() - start;
      // Should complete 100k operations in reasonable time (< 100ms on modern hardware)
      expect(duration).to.be.lessThan(100);
    });

    it('should handle large objects without performance issues', () => {
      const largeObj = Array.from({ length: 1000 }, (_, i) => ({ [`key${i}`]: i }))
        .reduce((acc, curr) => ({ ...acc, ...curr }), {});
      
      const start = Date.now();
      const result = defaultTo(largeObj, {});
      const duration = Date.now() - start;

      expect(result).to.equal(largeObj);
      expect(duration).to.be.lessThan(10);
    });
  });

  describe('documentation vs implementation discrepancies', () => {
    it('documents that NaN is NOT handled as per JSDoc (potential bug)', () => {
      // JSDoc claims: "The `defaultValue` is returned if `value` is `NaN`, `null`, or `undefined`"
      // Reality: Only null and undefined trigger defaultValue
      // This test documents the actual behavior for future reference
      const result = defaultTo(NaN, 'should-return-this-per-docs-but-doesnt');
      expect(result).to.be.NaN;
      // If this test fails in the future, the implementation was fixed to match docs
    });
  });
});