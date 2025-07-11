const { add, sub } = require('../math');

test('add 2 + 3 should be 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('add 2 + 1 should be 3', () => {
  expect(add(2, 1)).toBe(3);
});

test('sub 5 - 3 should be 2', () => {
  expect(sub(5, 3)).toBe(2);
});
