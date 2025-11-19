// Minimal CommonJS shim used by tests. Keeps files simple for Mocha.
function add(a, b) {
  return a + b
}

module.exports = { add }

