// toString.js function
// Jenny
// AI USE: copilot used for formatting and test descriptions
import { expect } from 'chai';
import toString from '../src/toString.js';

describe('toString(value) ', function() {
    
    describe('Converting different data types to strings', function() {

        describe('String values should return as-is', function() {
            it('should return same string when input is already a string', function() {
                expect(toString('abc')).to.equal('abc');
            });
            
            it('should return empty string when input is empty string', function() {
                expect(toString('')).to.equal('');
            });
        });
        
        describe('should return empty string', function() {
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
            
            it('should handle arrays with null and undefined values', function() {
                expect(toString([1, null, 3])).to.equal('1,,3');
                expect(toString([null, undefined, null])).to.equal(',,');
                expect(toString([1, undefined, 3])).to.equal('1,,3');
            });
            
            it('should handle nested arrays with null values', function() {
                expect(toString([[1, null], [null, 2]])).to.equal('1,,2');
            });
        });
        
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
        
        describe('Symbols should use Symbol.prototype.toString', function() {
            it('should convert Symbol to string representation', function() {
                const sym = Symbol('test');
                const result = toString(sym);
                expect(result).to.equal('Symbol(test)');
            });
            
            it('should handle Symbol without description', function() {
                const sym = Symbol();
                const result = toString(sym);
                expect(result).to.equal('Symbol()');
            });
            
            it('should handle well-known Symbols', function() {
                const result = toString(Symbol.iterator);
                expect(result).to.equal('Symbol(Symbol.iterator)');
            });
        });
    });
});