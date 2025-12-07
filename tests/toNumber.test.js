// Salli
import { expect } from 'chai';
import toNumber from '../src/toNumber.js';


describe('Test cases: toNumber.js', () => {
    
    describe('Test number conversion for acceptable numbers', () => {

        it('should return 5 for 5', () => {
            expect(toNumber(5)).to.equal(5);
        });
        it('should return -5 for -5', () => {
            expect(toNumber(5)).to.equal(5);
        });
        it('should return Infinity for Infinity', () => {
            expect(toNumber(Infinity)).to.equal(Infinity);
        }); 
        it('should return 5.5 for 5.5', () => {
            expect(toNumber(5.5)).to.equal(5.5);
        }); 

        it('should return 5 for "5"', () => {
            expect(toNumber('5')).to.deep.equal(5);
        });

        it('should return -5 for "-5"', () => {
            expect(toNumber('5')).to.deep.equal(-5);
        });

        it('should return 5 for Object 5', () => {
            const obj = new Object(5);
            expect(toNumber(obj)).to.deep.equal(5);
        });

        it('should return 5 for " 5 "', () => {
            expect(toNumber(' 5 ')).to.deep.equal(5);
        });
    });


    describe('Test conversion for inacceptable non-numbers', () => {

        it('should return NaN for NaN', () => {
            expect(toNumber(NaN)).to.deep.equal(NaN);
        });

        it('should return NaN for "a"', () => {
            expect(toNumber('a')).to.deep.equal(NaN);
        });

        it('should return NaN for empty string', () => {
            expect(toNumber('')).to.deep.equal(0);
        });

        it('should return NaN for white space', () => {
            expect(toNumber(' ')).to.deep.equal(0);
        });

        it('should return NaN for Symbol()', () => {
            expect(toNumber(Symbol())).to.deep.equal(NaN);
        }); 

        it('should return NaN for Symbol(5)', () => {
            expect(toNumber(Symbol(5))).to.deep.equal(NaN);
        }); 

        it('should return NaN for a function', () => {
            function func(){return 5;};
            const result = toNumber(func);
            expect(result).to.be.NaN;
        });

    });



    describe('Test conversion for acceptable binary and hexadecimal representations', () => {

        it('should return 5 for 0b101', () => {
            expect(toNumber(0b101)).to.equal(5);
        });

        it('should return 13 for 0B1101', () => {
            expect(toNumber(0B1101)).to.equal(13);
        });

        it('should return 63 for 0o77', () => {
            expect(toNumber(0o77)).to.equal(63);
        });

        it('should return 83 for 0O123', () => {
            expect(toNumber(0O123)).to.equal(83);
        });

        it('should return 31 for 0x1F', () => {
            expect(toNumber(0x1F)).to.equal(31);
        });

        it('should return 2748 for 0XABC', () => {
            expect(toNumber(0XABC)).to.equal(2748);
        });
        it('should return -31 for  -0x1F', () => {
            expect(toNumber(-0x1F)).to.equal(-31);
        });

    });


    describe('Test conversion for unacceptable binary and hexadecimal representations', () => {

        it('should return NaN for invalid binary of "0b102"', () => {
        expect(toNumber("0b102")).to.be.NaN;
        });

        it('should return NaN for invalid binary of "0b"', () => {
        expect(toNumber("0b")).to.be.NaN;
        });

        it('should return NaN for invalid octal of "0o89"', () => {
        expect(toNumber("0o89")).to.be.NaN;
        });

        it('should return NaN for invalid octal of "0x"', () => {
        expect(toNumber("0x")).to.be.NaN;
        });

    });

});