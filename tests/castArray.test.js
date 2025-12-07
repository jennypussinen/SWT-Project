// castArray.test.js
// Jenny
// AI USE: copilot for formatting and test generation, and also to explain how the test object code works.
import { expect } from 'chai';
import castArray from '../src/castArray.js';

describe('castArray(value)', function() {
    
    describe('Arrays remain unchanged', function() {
        
        it('should return the same array when input is an array', function() {
            const array = [1, 2, 3];
            expect(castArray(array)).to.equal(array);
        });
        
        it('should return empty array when input is empty array', function() {
            const array = [];
            expect(castArray(array)).to.deep.equal([]);
        });
    });
    
    describe('Non-array values wrapped in array', function() {
        
        it('should return [1] when input is number 1', function() {
            expect(castArray(1)).to.deep.equal([1]);
        });
        
        it('should return ["abc"] when input is string "abc"', function() {
            expect(castArray('abc')).to.deep.equal(['abc']);
        });
        
        it('should return [object] when input is an object', function() {
            expect(castArray({ 'a': 1 })).to.deep.equal([{ 'a': 1 }]);
        });

        it('should return [true] when input is boolean true', function() {
            expect(castArray(true)).to.deep.equal([true]);
        });
    });
    
    describe('Edge cases', function() {
        
        it('should return [null] when input is null', function() {
            expect(castArray(null)).to.deep.equal([null]);
        });
        
        it('should return [undefined] when input is undefined', function() {
            expect(castArray(undefined)).to.deep.equal([undefined]);
        });
        
        it('should return [undefined] when called with no arguments', function() {
            expect(castArray()).to.deep.equal([undefined]);
        });
    });
    
    describe('Real-world Use Case Scenarios', function() {
        
        describe('Producer fills in product price into form field', function() {
            it('should normalize single price or price array for consistent processing', function() {
                expect(castArray(15.99)).to.deep.equal([15.99]);
                const priceTiers = [10.99, 15.99, 19.99];
                expect(castArray(priceTiers)).to.equal(priceTiers);
            });
            
            it('should handle promotional pricing structures', function() {
                const promoPrice = { regular: 20.99, sale: 15.99 };
                expect(castArray(promoPrice)).to.deep.equal([promoPrice]);
            });
        });
        
        describe('Producer fills in product categories into form field', function() {
            it('should normalize category input to array format', function() {
                expect(castArray('Organic')).to.deep.equal(['Organic']);
                const categories = ['Organic', 'Vegetables', 'Local'];
                expect(castArray(categories)).to.equal(categories);
            });
        });
        
        describe('Producer opens a new form', function() {
            it('should normalize form initialization data', function() {
                const template = { name: '', price: 0, categories: [], inStock: true };
                expect(castArray(template)).to.deep.equal([template]);
                
                const bulkProducts = [
                    { name: 'Organic Apples', price: 4.99 },
                    { name: 'Fresh Milk', price: 3.50 }
                ];
                expect(castArray(bulkProducts)).to.equal(bulkProducts);
            });
        });
    });
});