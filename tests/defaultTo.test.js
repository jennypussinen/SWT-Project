// defaultTo.test.js
import { expect } from 'chai';
import defaultTo from '../src/defaultTo.js'; // adjust path to your file

describe('Self-designed tests (Phase 1 plan)', function() {

  describe('defaultTo()', function() {

    it('should return the value if it is not null or undefined', function() {
      expect(defaultTo(1, 10)).to.equal(1);
      expect(defaultTo('hello', 'world')).to.equal('hello');
    });

    it('should return the default value if the value is undefined', function() {
      expect(defaultTo(undefined, 10)).to.equal(10);
    });

    it('should return the default value if the value is null', function() {
      expect(defaultTo(null, 10)).to.equal(10);
    });

    it('should return the value if it is 0 or false (not null/undefined)', function() {
      expect(defaultTo(0, 10)).to.equal(0);
      expect(defaultTo(false, true)).to.equal(false);
    });

  });

});
