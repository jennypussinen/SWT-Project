// reduce.test.js
// Jenny
// AI USE: copilot for formatting and test description. Also used for test generation, and also to explain how
// the test object code works.
import { expect } from 'chai';
import reduce from '../src/reduce.js';

describe('reduce(collection, iteratee, accumulator): ', function() {
    // Positive test cases
    describe('1. Positive Test Cases', function() {

        describe('Reduce array with accumulator', function() {
            it('should sum array elements when accumulator is provided', function() {
                expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.equal(3);
            });
            
            it('should concatenate strings when accumulator is empty string', function() {
                expect(reduce(['a', 'b', 'c'], (result, value) => result + value, '')).to.equal('abc');
            });
            
            it('should build array when accumulator is empty array', function() {
                expect(reduce([1, 2, 3], (result, value) => { result.push(value * 2); return result; }, [])).to.deep.equal([2, 4, 6]);
            });
        });
        
        describe('Reduce array without accumulator', function() {
            it('should sum array elements using first element as initial value', function() {
                expect(reduce([1, 2, 3], (sum, n) => sum + n)).to.equal(6);
            });
        });
        
        describe('Reduce object', function() {
            it('should group object values by key', function() {
                const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
                    (result[value] || (result[value] = [])).push(key);
                    return result;
                }, {});
                expect(result).to.have.property('1').that.includes('a');
                expect(result).to.have.property('2').that.includes('b');
            });
        });
    });
    
    // Negative test cases
    describe('2. Negative Test Cases', function() {
        
        describe('Empty or invalid collections', function() {
            it('should return accumulator when array is empty', function() {
                expect(reduce([], (sum, n) => sum + n, 0)).to.equal(0);
            });
            
            it('should return accumulator when object is empty', function() {
                expect(reduce({}, (result, value) => result + value, 10)).to.equal(10);
            });
            
            it('should return undefined when empty array and no accumulator', function() {
                expect(reduce([], (sum, n) => sum + n)).to.be.undefined;
            });
        });
    });
});