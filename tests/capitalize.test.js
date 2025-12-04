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
        it('should not affect array content but treats array as valid input', () => {
            expect(capitalize([1, 2, 3])).to.equal('1, 2, 3');
        });
    });

    describe('Test capitalization of invalid inputs', () => {
        it('should report an error with undefined object', () => {
            expect(() => capitalize(undefined)).to.throw();
        });
        it('should report an error with undefined object', () => {
            expect(capitalize(undefined)).to.equal('undefined');
        });
    });

});

describe('Detailed test cases using AI (Phase 1 plan): capitalize.js', () => {

    describe('CAPITALIZE', () => {
        it('returns empty string as is', () => {
            expect(capitalize('')).to.equal('');
        });

    });
});
