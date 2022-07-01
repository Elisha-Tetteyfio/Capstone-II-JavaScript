const addup = require('../src/index.js');

test('return a sum equal to 4', () => {
  expect(addup()).toBe(4);
});