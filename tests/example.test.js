const { add } = require("../src/example");
const { expect } = require('chai');

describe('Example test', () => {
  it('adds numbers correctly', () => {
    expect(add(2, 3)).to.equal(5);
  });
});
