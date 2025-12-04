// jenny
// castArray.test.js
import { expect } from 'chai';
import castArray from '../src/castArray.js';

describe('castArray(value): ', function() {
    // Positive test cases
    describe('1. Positive Test Cases', function() {

        describe('Value is already an array', function() {
            it('should return the same array when input is an array', function() {
                const array = [1, 2, 3];
                expect(castArray(array)).to.equal(array);
            });
            
            it('should return empty array when input is empty array', function() {
                const array = [];
                expect(castArray(array)).to.deep.equal([]);
            });
        });
        
        describe('Value should be wrapped in array', function() {
            it('should return [1] when input is number 1', function() {
                expect(castArray(1)).to.deep.equal([1]);
            });
            
            it('should return ["abc"] when input is string "abc"', function() {
                expect(castArray('abc')).to.deep.equal(['abc']);
            });
            
            it('should return [object] when input is an object', function() {
                expect(castArray({ 'a': 1 })).to.deep.equal([{ 'a': 1 }]);
            });
        });
    });
    
    // Negative test cases
    describe('2. Negative Test Cases', function() {
        
        describe('Handling null and undefined', function() {
            it('should return [null] when input is null', function() {
                expect(castArray(null)).to.deep.equal([null]);
            });
            
            it('should return [undefined] when input is undefined', function() {
                expect(castArray(undefined)).to.deep.equal([undefined]);
            });
        });
        
        describe('No arguments provided', function() {
            it('should return [undefined] when called with no arguments', function() {
                expect(castArray()).to.deep.equal([undefined]);
            });
        });
    });
});