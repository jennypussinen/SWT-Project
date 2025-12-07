// Salli
import { expect } from 'chai';
import map from '../src/map.js';


describe('Test cases: map.js', () => {

    describe('Test arrays with different contents', () => {
        function iteratee_test(n) {return n};
        const string_array = ['h', 'h']
        const num_array = [1, 2, 3];
        const func_array = [iteratee_test]

        it('should return number array for number array', () => {
            expect(map(num_array, iteratee_test)).to.deep.equal([1,2,3]);
        });

        it('should return ["h", "h"] array for ["h", "h"]', () => {
            expect(map(string_array, iteratee_test)).to.deep.equal(['h', 'h']);
        });

        it('should return empty array for null', () => {
            expect(map(null, iteratee_test)).to.deep.equal([]);
        });

        it('should return empty array for undefined', () => {
            expect(map(undefined, iteratee_test)).to.deep.equal([]);
        });

        it('should return empty array for empty array', () => {
            expect(map([], iteratee_test)).to.deep.equal([]);
        });

        it('should return function array for function array', () => {
            expect(map(func_array, iteratee_test)).to.deep.equal([iteratee_test]);
        });
    });


    describe('Test different array and iteratee combinations', () => {

        const string_array = ['h', 'h'];
        const num_array = [2, 3];

        function iteratee_square(n) {
                 return n * n};

        function iteratee_add_letter(n) {
            return n + 'a'};

        it('should return [4, 9] for [2, 3] array with squaring iteratee', () => {
            expect(map(num_array, iteratee_square)).to.deep.equal([4, 9]);
        });

        it('should return ["ha", "ha"] for ["h", "h"] with letter iteratee', () => {
            expect(map(string_array, iteratee_add_letter)).to.deep.equal(["ha", "ha"]);
        });

        it('should return [Infinity] with [Infinity]', () => {
            expect(map([Infinity], iteratee_square)).to.deep.equal([Infinity]);
        });

        it('should return [NaN, NaN] for ["h", "h"] with squaring iteratee', () => {
            const result = map(string_array, iteratee_square);
            expect(result[0]).to.be.NaN;
            expect(result[1]).to.be.NaN;
        });

        it('should return ["2a", "3a"] for [2, 3] array with iteratee add_letter', () => {
            const result = map(num_array, iteratee_add_letter);
            expect(result[0]).to.equal('2a');
            expect(result[1]).to.equal('3a');
        });
    });

    
    describe('Test invalid parameters', () => {

        function iteratee_test(n) {return n};
        const string_array = ['h', 'h'];
        const num_array = [2, 3];

        it('should return [] when 1 is given instead of array', () => {
            expect(map(1, iteratee_test)).to.deep.equal([]);
        });

        it('should return [] when string is given instead of iteratee function', () => {
            expect(map(num_array, string_array)).to.equal([]);
        });
    });

});

