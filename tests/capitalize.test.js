//Salli
import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

// See documentation 4.2 Detailed test case design 
describe('Detailed test cases without AI (Phase 1 plan): capitalize.js', () => {
    
    describe('Test capitalization of acceptable strings', () => {
        it('should return empty string as is', () => {
            expect(capitalize('')).to.equal('');
        });

        it('should capitalize first letter of string', () => {
            expect(capitalize('red')).to.equal('Red');
        });

        it('should capitalize first letter of string and decapitalize other letters', () => {
            expect(capitalize('RED')).to.equal('Red');
        });

        it('should capitalize the first and only letter of string', () => {
            expect(capitalize('r')).to.equal('R');
        });

        it('should capitalize the first letter of string containing several words', () => {
            expect(capitalize('RED TOMATO')).to.equal('Red tomato');
        });   
    });

    describe('Test capitalization of inputs containing other than string characters', () => {
        it('should stringify integer without capitalization', () => {
            expect(capitalize(5)).to.equal('5');
        });
        it('should treat leading integer as the first character and decapitalize the rest of the characters', () => {
            expect(capitalize('533 Hello')).to.equal('533 hello');
        });
        it('should treat leading emoji as the first character and decapitalize the rest of the characters', () => {
            expect(capitalize('💡 IDEA')).to.equal('💡 idea');
        });
        it('should treat leading white space as the first character and decapitalize the rest of the characters', () => {
            expect(capitalize(' Red')).to.equal(' red');
        });
        it('should not affect integer array content but treat array as valid input', () => {
            expect(capitalize([1, 2, 3])).to.equal('1,2,3');
        });
    });

    describe('Test capitalization of invalid inputs', () => {
        it('should return capitalized string for undefined object', () => {
            expect(capitalize(undefined)).to.equal('Undefined');
        });
        it('should return capitalized string for null object', () => {
            expect(capitalize(null)).to.equal('Null');
        });
    });

});

describe('Detailed test cases using AI (Phase 1 plan): capitalize.js', () => {

    describe('strings', () => {
        it('returns empty string as is', () => {
        expect(capitalize('')).to.equal('');
        });

        it('capitalizes first letter and lowercases the rest', () => {
            expect(capitalize('red')).to.equal('Red');
            expect(capitalize('RED')).to.equal('Red');
            expect(capitalize('rED')).to.equal('Red');
        });

        it('handles single-character strings', () => {
            expect(capitalize('a')).to.equal('A');
            expect(capitalize('Z')).to.equal('Z');
        });

        it('handles multi-word strings', () => {
            expect(capitalize('RED TOMATO')).to.equal('Red tomato');
        });

        it('handles strings starting with non-letter characters', () => {
            expect(capitalize('  hello')).to.equal('  hello');
            expect(capitalize('💡 IDEA')).to.equal('💡 idea');
            expect(capitalize('533 Hello')).to.equal('533 hello');
        });

        it('handles strings with leading and trailing spaces', () => {
            expect(capitalize('  hello world  ')).to.equal('  hello world  ');
    });
    });

    describe('non-string inputs', () => {
        it('stringifies numbers', () => {
            expect(capitalize(123)).to.equal('123');
        });

        it('stringifies booleans', () => {
            expect(capitalize(true)).to.equal('True');
            expect(capitalize(false)).to.equal('False');
        });

        it('stringifies arrays', () => {
            expect(capitalize([1, 2, 3])).to.equal('1,2,3');
            expect(capitalize(['A', 'B'])).to.equal('A,b');
        });

        it('stringifies null and undefined', () => {
            expect(capitalize(null)).to.equal('Null');
            expect(capitalize(undefined)).to.equal('Undefined');
        });

        it('stringifies symbols', () => {
            expect(capitalize(Symbol('abc').toString())).to.equal('Symbol(abc)');
    });
    });
});
