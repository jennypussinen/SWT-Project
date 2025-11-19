const { add } = require("../src/example");

describe("Example test", () => {
  test("adds numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });
});
