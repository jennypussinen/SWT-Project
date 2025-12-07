// isEmpty.test.js
// Jenny
// AI USE: copilot used for formatting and test descriptions
import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty(value)', function() {
    
    describe('Empty values', function() {
        
        it('should return true for null', function() {
            expect(isEmpty(null)).to.be.true;
        });

        it('should return true for undefined', function() {
            expect(isEmpty(undefined)).to.be.true;
        });
        
        it('should return true for primitives', function() {
            expect(isEmpty(1)).to.be.true;
            expect(isEmpty(true)).to.be.true;
            expect(isEmpty(false)).to.be.true;
        });
        
        it('should return true for empty collections', function() {
            expect(isEmpty([])).to.be.true;
            expect(isEmpty('')).to.be.true;
            expect(isEmpty({})).to.be.true;
        });
    });
    
    describe('Non-empty values', function() {
        
        it('should return false for non-empty collections', function() {
            expect(isEmpty([1, 2, 3])).to.be.false;
            expect(isEmpty('abc')).to.be.false;
            expect(isEmpty({ 'a': 1 })).to.be.false;
        });
    });

    describe('Array-like values', function() {
        
        it('should handle arguments objects', function() {
            (function() {
                expect(isEmpty(arguments)).to.be.true;
            })();
            (function() {
                expect(isEmpty(arguments)).to.be.false;
            })(1, 2, 3);
        });
        
        it('should handle arrays based on length', function() {
            expect(isEmpty([])).to.be.true;
            expect(isEmpty([1])).to.be.false;
            expect(isEmpty([undefined, null])).to.be.false;
        });
        
        it('should handle strings based on length', function() {
            expect(isEmpty('')).to.be.true;
            expect(isEmpty('a')).to.be.false;
            expect(isEmpty(' ')).to.be.false;
        });
        
        it('should handle buffers based on length', function() {
            expect(isEmpty(Buffer.alloc(0))).to.be.true;
            expect(isEmpty(Buffer.from([1, 2, 3]))).to.be.false;
        });
        
        it('should handle jQuery-like collections with splice method', function() {
            expect(isEmpty({ length: 0, splice: function() {} })).to.be.true;
            expect(isEmpty({ 0: 'item', length: 1, splice: function() {} })).to.be.false;
        });
    });

    describe('Maps and Sets', function() {
        
        it('should handle Maps based on size', function() {
            expect(isEmpty(new Map())).to.be.true;
            
            const map = new Map();
            map.set('key', 'value');
            expect(isEmpty(map)).to.be.false;
            
            map.clear();
            expect(isEmpty(map)).to.be.true;
        });
        
        it('should handle Sets based on size', function() {
            expect(isEmpty(new Set())).to.be.true;
            
            const set = new Set();
            set.add('value');
            expect(isEmpty(set)).to.be.false;
            
            set.delete('value');
            expect(isEmpty(set)).to.be.true;
        });
    });
    
    describe('Prototype objects', function() {
        
        it('should return true for empty prototype objects', function() {
            function TestConstructor() {}
            expect(isEmpty(TestConstructor.prototype)).to.be.true;
        });
        
        it('should return false for prototype objects with properties', function() {
            function TestConstructor() {}
            TestConstructor.prototype.testMethod = function() {};
            expect(isEmpty(TestConstructor.prototype)).to.be.false;
        });
        
        it('should handle Object.prototype', function() {
            expect(isEmpty(Object.prototype)).to.be.true;
        });
    });

    describe('Real-world scenarios', function() { 
        
        describe('Form input validation', function() {
            it('should return true for empty string input', function() {
                expect(isEmpty('')).to.be.true;
            });
            
            // IMPORTANT: Whitespace-only strings are NOT considered empty by isEmpty()
            // This may be unexpected behavior for form validation use cases where "   " should be treated as invalid input.
            // isEmpty() checks string.length, not string content, so any whitespace results in length > 0.
            it('should return false for whitespace-only strings', function() {
                expect(isEmpty('   ')).to.be.false;
                expect(isEmpty(' ')).to.be.false;
                expect(isEmpty('\n')).to.be.false;
                expect(isEmpty('\t')).to.be.false;
            });
            
            it('should require trim() for proper form validation of whitespace', function() {
                const userInput = '   ';
                
                // Direct check: whitespace is NOT empty
                expect(isEmpty(userInput)).to.be.false;
                
                // For form validation: trim first
                expect(isEmpty(userInput.trim())).to.be.true;
            });
        });
    });
});