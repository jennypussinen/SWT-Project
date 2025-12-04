// isEmpty.test.js
// Jenny
// AI USE: copilot used for formatting and test descriptions
import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty(value): ', function() {
    // Positive test cases
    describe('1. Positive Test Cases', function() {

        describe('Empty values should return true', function() {
            it('should return true when input is null', function() {
                expect(isEmpty(null)).to.be.true;
            });
            
            it('should return true when input is empty array', function() {
                expect(isEmpty([])).to.be.true;
            });
            
            it('should return true when input is empty string', function() {
                expect(isEmpty('')).to.be.true;
            });
            
            it('should return true when input is empty object', function() {
                expect(isEmpty({})).to.be.true;
            });
        });
        
        describe('Primitives should return true', function() {
            it('should return true when input is number 1', function() {
                expect(isEmpty(1)).to.be.true;
            });
            
            it('should return true when input is boolean true', function() {
                expect(isEmpty(true)).to.be.true;
            });
        });
    });
    
    // Negative test cases
    describe('2. Negative Test Cases', function() {
        
        describe('Non-empty values should return false', function() {
            it('should return false when input is non-empty array', function() {
                expect(isEmpty([1, 2, 3])).to.be.false;
            });
            
            it('should return false when input is non-empty string', function() {
                expect(isEmpty('abc')).to.be.false;
            });
            
            it('should return false when input is object with properties', function() {
                expect(isEmpty({ 'a': 1 })).to.be.false;
            });
        });
    });
});