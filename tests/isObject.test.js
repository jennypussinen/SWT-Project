// Salli
import { expect } from 'chai';
import isObject from '../src/isObject.js';


describe('Test cases: isObject.js', () => {

    describe('Test acceptable objects', () => {

        const obj = { key: 'value' };
        const func = function (x) { return x * 2; };
        const arr = [1, 2, 3];
        const map = new Map([
            ['name', 'Alice'],
            ['age', 30]
        ]);
        const set = new Set([1, 2, 3]);


        it('should return true for base object', () => {
            expect(isObject(obj)).to.equal(true);
        });

        it('should return true for function', () => {
            expect(isObject(func)).to.equal(true);
        });

        it('should return true for array', () => {
            expect(isObject(arr)).to.equal(true);
        });

        it('should return true for map', () => {
            expect(isObject(map)).to.equal(true);
        });

        it('should return true for set', () => {
            expect(isObject(set)).to.equal(true);
        });
    });


    describe('Test unacceptable objects', () => {

        const str = 'abc';
        const num = 4;
        const bool = true;
        const undef = undefined;
        const null_obj = null;
        const error = new Error('Something went wrong!');

        it('should return false for primitive string', () => {
            expect(isObject(str)).to.equal(false);
        });

        it('should return false for primitive number', () => {
            expect(isObject(num)).to.equal(false);
        });

        it('should return false for primitive boolean', () => {
            expect(isObject(bool)).to.equal(false);
        });

        it('should return false for undefined', () => {
            expect(isObject(undef)).to.equal(false);
        });

        it('should return false for null', () => {
            expect(isObject(null_obj)).to.equal(false);
        });

        it('should return false for error', () => {
            expect(isObject(error)).to.equal(false);
        });
    });

});

