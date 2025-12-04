// toString.js function
// Jenny
// AI USE: copilot used for formatting and test descriptions
import { expect } from 'chai';
import toString from '../src/toString.js';

describe('toString(value): ', function() {
    // Positive test cases
    describe('1. Positive Test Cases', function() {

        describe('String values should return as-is', function() {
            it('should return same string when input is already a string', function() {
                expect(toString('abc')).to.equal('abc');
            });
            
            it('should return empty string when input is empty string', function() {
                expect(toString('')).to.equal('');
            });
        });
        
        describe('Null and undefined should return empty string', function() {
            it('should return empty string when input is null', function() {
                expect(toString(null)).to.equal('');
            });
            
            it('should return empty string when input is undefined', function() {
                expect(toString(undefined)).to.equal('');
            });
        });
        
        describe('Numbers should be converted to strings', function() {
            it('should return "1" when input is number 1', function() {
                expect(toString(1)).to.equal('1');
            });
            
            it('should return "-0" when input is -0', function() {
                expect(toString(-0)).to.equal('-0');
            });
            
            it('should return "0" when input is 0', function() {
                expect(toString(0)).to.equal('0');
            });
        });
        
        describe('Arrays should be converted to comma-separated strings', function() {
            it('should return "1,2,3" when input is [1, 2, 3]', function() {
                expect(toString([1, 2, 3])).to.equal('1,2,3');
            });
            
            it('should return empty string when input is empty array', function() {
                expect(toString([])).to.equal('');
            });
        });
    });
    
    // Negative test cases
    describe('2. Negative Test Cases', function() {
        
        describe('Boolean values should be converted to strings', function() {
            it('should return "true" when input is boolean true', function() {
                expect(toString(true)).to.equal('true');
            });
            
            it('should return "false" when input is boolean false', function() {
                expect(toString(false)).to.equal('false');
            });
        });
        
        describe('Objects should be converted to strings', function() {
            it('should return "[object Object]" when input is plain object', function() {
                expect(toString({ 'a': 1 })).to.equal('[object Object]');
            });
        });
    });
});