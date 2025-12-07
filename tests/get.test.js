// Salli
import { expect } from 'chai';
import get from '../src/get.js';


describe('Test cases: get.js', () => {

  describe('Test get method for valid objects', () => {
    const simple_object = { 'a': 'b' };
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const defaultValue = "default";
    const path1 = ['a', '0'];
    const path2 = ['a', '0', 'b'];
    const path3 = ['a', '0', 'b', 'c'];

    it('should return value "b" for object with key "a"', () => {
      expect(get(simple_object, 'a', defaultValue)).to.equal('b');
    });

    it('should return object with nested object and path to first level', () => {
      expect(get(object, path1, defaultValue)).to.deep.equal({ b: { c: 3 } });
    });

    it('should return object with nested object and path to second level', () => {
      expect(get(object, path2, defaultValue)).to.deep.equal({ c: 3 });
    });

    it('should return object with nested object and path to third level', () => {
      expect(get(object, path3, defaultValue)).to.equal(3);
    });
  });


  describe('Test get method for invalid objects', () => {

    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const defaultValue = "default";
    const null_path = 'a.b.c';

    it('should return default value for invalid path when default value is given', () => {
      expect(get(object, null_path, defaultValue)).to.equal("default");
    });

    it('should return undefined for invalid path when default value is not given', () => {
      expect(get(object, null_path)).to.equal(undefined);
    });
  });


  describe('Test get method for missing parameters', () => {

    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const defaultValue = "default";

    const invalid_path = 'a.b.c'; 
    const path = 'a[0].b.c';        

    it('should return undefined when missing default value', () => {
      expect(get(object, invalid_path)).to.equal(undefined);
    });

    it('should return default value when missing path', () => {
      expect(get(object, undefined, defaultValue)).to.equal("default");
    });

    it('should return default value when missing object', () => {
      expect(get(undefined, path, defaultValue)).to.equal("default");
    });

    it('should return undefined when missing all parameters', () => {
      expect(get()).to.equal(undefined);
    });

    it('should return undefined when given only one parameter', () => {
      expect(get(object)).to.equal(undefined);
    });

  });

});
