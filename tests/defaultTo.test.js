// defaultTo.test.js
// Note: After reading the design document done in phase 1 and comparing it to the 
// implementation of defaultTo.js, we can see that there has been some kind of
// brainfart in the assumption that only number values are valid inputs.
// However, these testcases are still implemented based on the design document,
// so the assumption is that number values are only valid values.

import { expect } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('defaultTo(input, fallback): Self-designed tests without AI (Phase 1 plan)', function() {

    describe('Fallback is used (param1 invalid)', function() {
        it('should return fallback when input (param1) is NaN', function() {
            expect(defaultTo(NaN, 10)).to.equal(10); // TC-DT-1
        });
        it('should return fallback when input (param1) is null', function() {
            expect(defaultTo(null, 10)).to.equal(10); // TC-DT-2
        });
        it('should return fallback when input (param1) is undefined', function() {
            expect(defaultTo(undefined, 10)).to.equal(10); // TC-DT-3
        });
        it('should return fallback when input (param1) is empty string', function() {
            expect(defaultTo("", 10)).to.equal(10); // TC-DT-7
        });
        it('should return fallback when input (param1) is string "3"', function() {
            expect(defaultTo("3", 10)).to.equal(10); // TC-DT-8
        });
        it('should return fallback when input (param1) is boolean true', function() {
            expect(defaultTo(true, 10)).to.equal(10); // TC-DT-9
        });
        it('should return fallback when input (param1) is boolean false', function() {
            expect(defaultTo(false, 10)).to.equal(10); // TC-DT-10
        });
        it('should return fallback when input (param1) is array', function() {
            expect(defaultTo([1, 2, 3], 10)).to.equal(10); // TC-DT-14
        });
    }); 

    describe('Make sure fallback value is accepted (param 1 invalid, valid param 2)', function() {
        it('should return negative integer fallback when input (param1) is invalid', function() {
            expect(defaultTo(null, -1)).to.equal(-1); // TC-DT-15
        });
        it('should return 0 as fallback when input (param1) is invalid', function() {
            expect(defaultTo(null, 0)).to.equal(0); // TC-DT-16
        });
        it('should return evaluated value (5+5) as fallback when input (param1) is invalid', function() {
            expect(defaultTo(null, 5+5)).to.equal(10); // TC-DT-21
        });
    }); 



    describe('Input is valid (param1 is returned)', function() {
        it('should return integer input (param1) without using fallback (param2)', function() {
            expect(defaultTo(5, 10)).to.equal(5); // TC-DT-0
        });
        it('should return negative input (param1) without using fallback (param2)', function() {
            expect(defaultTo(-1, 10)).to.equal(-1); // TC-DT-4
        });
        it('should return zero input (param1) without using fallback (param2)', function() {
            expect(defaultTo(0, 10)).to.equal(0); // TC-DT-5
        });
        it('should return positive float input (param1) without using fallback (param2)', function() {
            expect(defaultTo(1.2, 10)).to.equal(1.2); // TC-DT-17
        });
        it('should return negative float input (param1) without using fallback (param2)', function() {
            expect(defaultTo(-1.7, 10)).to.equal(-1.7); // TC-DT-18
        });
    });

    describe('Input and fallback is invalid (invalid)', function() {
        it('should throw an error when both param1 and param2 are NaN', function() {
            expect(() => defaultTo(NaN, NaN)).to.throw(); // TC-DT-6
        });
        it('should throw an error when both param1 and param2 are null', function() {
            expect(() => defaultTo(null, null)).to.throw(); // TC-DT-22
        });
        it('should throw an error when both param1 and param2 are null', function() {
            expect(() => defaultTo(undefined, undefined)).to.throw(); // TC-DT-22
        });
    });

});


