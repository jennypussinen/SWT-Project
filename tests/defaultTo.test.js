// defaultTo.test.js
// Jenny
// NOTE: After reading the design document done in phase 1 and comparing it to the 
// implementation of defaultTo.js, we can see that there has been some kind of
// brainfart in the assumption that only number values are valid inputs.
// However, these testcases are still implemented based on the design document,
// so the assumption is that number values are only valid values.
import { expect } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('defaultTo(input, fallback): Self-designed tests without AI (Phase 1 plan)', function() {
    
    // Positive test cases
    describe('1. Positive Test Cases', function() {
        
        describe('Input is valid (input is returned)', function() {
            it('should return input value 5', function() {
                expect(defaultTo(5, 10)).to.equal(5); // TC-DT-0
            });
            
            it('should return input value -1', function() {
                expect(defaultTo(-1, 10)).to.equal(-1); // TC-DT-4
            });
            
            it('should return input value 0', function() {
                expect(defaultTo(0, 10)).to.equal(0); // TC-DT-5
            });
            
            it('should return input value 1.2', function() {
                expect(defaultTo(1.2, 10)).to.equal(1.2); // TC-DT-17
            });
            
            it('should return input value -1.7', function() {
                expect(defaultTo(-1.7, 10)).to.equal(-1.7); // TC-DT-18
            });
            
            it('should return input value 0.0', function() {
                expect(defaultTo(0.0, 10)).to.equal(0.0); // TC-DT-19
            });
            
            it('should return input value 8, when input is (3+5)', function() {
                expect(defaultTo(3+5, 10)).to.equal(8); // TC-DT-20
            });
        });
        
        describe('Fallback is used (input is invalid)', function() {
            it('should return fallback value 10 when input is NaN', function() {
                expect(defaultTo(NaN, 10)).to.equal(10); // TC-DT-1
            });
            
            it('should return fallback value 10 when input is null', function() {
                expect(defaultTo(null, 10)).to.equal(10); // TC-DT-2
            });
            
            it('should return fallback value 10 when input is undefined', function() {
                expect(defaultTo(undefined, 10)).to.equal(10); // TC-DT-3
            });
            
            it('should return fallback value 10 when input is empty string ""', function() {
                expect(defaultTo("", 10)).to.equal(10); // TC-DT-7
            });
            
            it('should return fallback value 10 when input is string "3"', function() {
                expect(defaultTo("3", 10)).to.equal(10); // TC-DT-8
            });
            
            it('should return fallback value 10 when input is boolean value true', function() {
                expect(defaultTo(true, 10)).to.equal(10); // TC-DT-9
            });
            
            it('should return fallback value 10 when input is boolean value false', function() {
                expect(defaultTo(false, 10)).to.equal(10); // TC-DT-10
            });
            
            it('should return fallback value 1 when input is array [1, 2, 3]', function() {
                expect(defaultTo([1, 2, 3], 1)).to.equal(1); // TC-DT-14
            });
        });
        
        describe('Valid fallback values', function() {
            it('should return fallback value -1 when input is null', function() {
                expect(defaultTo(null, -1)).to.equal(-1); // TC-DT-15
            });
            
            it('should return fallback value 0 when input is null', function() {
                expect(defaultTo(null, 0)).to.equal(0); // TC-DT-16
            });
            
            it('should return fallback value 10 when fallback value is 5+5 and input is null', function() {
                expect(defaultTo(null, 5+5)).to.equal(10); // TC-DT-21
            });
        });
    });
    
    // Negative test cases
    describe('2. Negative Test Cases', function() {
        
        describe('Both parameters invalid', function() {
            it('should throw error when both input and fallback values are NaN', function() {
                expect(() => defaultTo(NaN, NaN)).to.throw(); // TC-DT-6
            });
            
            it('should throw an error when both input and fallback values are null', function() {
                expect(() => defaultTo(null, null)).to.throw(); // TC-DT-22
            });
            
            it('should throw an error when bot input and fallback values are undefined', function() {
                expect(() => defaultTo(undefined, undefined)).to.throw(); // TC-DT-23
            });
        });
        
        describe('Invalid fallback types', function() {
            it('should throw an error when input is null and fallback value is "Hello"', function() {
                expect(() => defaultTo(null, "Hello")).to.throw(); // TC-DT-11
            });
            
            it('should throw an error when input is null and fallback value is boolean true', function() {
                expect(() => defaultTo(null, true)).to.throw(); // TC-DT-12
            });
            
            it('should throa an error when input is null and fallback value is an array [1, 2 ,3]', function() {
                expect(() => defaultTo(null, [1, 2, 3])).to.throw(); // TC-DT-13
            });
        });
    });
});