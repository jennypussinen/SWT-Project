// reduce.test.js
// Jenny
// AI USE: copilot for formatting and test description. Also used for test generation, and also to explain how
// the test object code works.
import { expect } from 'chai';
import reduce from '../src/reduce.js';

describe('reduce(collection, iteratee, accumulator): ', function() {
    
    describe('Basic functionality with valid inputs', function() {

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
    
    describe('Edge cases and empty collections', function() {
        
        describe('Empty collections', function() {
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
        
        describe('Missing input values', function() {
            it('should handle missing collection parameter', function() {
                expect(() => reduce(undefined, (sum, n) => sum + n, 0)).to.not.throw();
            });
            
            it('should handle missing iteratee parameter', function() {
                expect(() => reduce([1, 2, 3], undefined, 0)).to.throw();
            });
            
            it('should handle missing accumulator (uses first element)', function() {
                expect(reduce([1, 2, 3], (sum, n) => sum + n)).to.equal(6);
            });
            
            it('should handle null collection', function() {
                expect(() => reduce(null, (sum, n) => sum + n, 0)).to.not.throw();
            });
        });
    });

    describe('Real-world scenarios: User views cart state', function() {
        
        describe('Calculate cart total price', function() {
            it('should calculate total price of all items in cart', function() {
                const cartItems = [
                    { id: 1, name: 'Organic Avocado', price: 4.99, quantity: 3 },
                    { id: 2, name: 'Fresh Salmon', price: 15.99, quantity: 2 },
                    { id: 3, name: 'Whole Wheat Bread', price: 3.50, quantity: 1 }
                ];
                const total = reduce(cartItems, (sum, item) => sum + (item.price * item.quantity), 0);
                expect(total).to.equal(50.45);
            });
        });
        
        describe('Build cart display data', function() {
            it('should create formatted cart items for display', function() {
                const cartItems = [
                    { id: 1, name: 'Artisan Sourdough Bread', price: 6.99, quantity: 2 },
                    { id: 2, name: 'Free-Range Eggs', price: 5.50, quantity: 3 }
                ];
                
                const displayData = reduce(cartItems, (result, item) => {
                    result.push({
                        displayName: `${item.name} (x${item.quantity})`,
                        lineTotal: item.price * item.quantity
                    });
                    return result;
                }, []);
                
                expect(displayData).to.have.lengthOf(2);
                expect(displayData[0].displayName).to.equal('Artisan Sourdough Bread (x2)');
                expect(displayData[0].lineTotal).to.equal(13.98);
                expect(displayData[1].displayName).to.equal('Free-Range Eggs (x3)');
                expect(displayData[1].lineTotal).to.equal(16.50);
            });
        });
    });
});