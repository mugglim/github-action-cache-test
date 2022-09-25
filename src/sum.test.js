const sum = require('./sum');

test('1 + 1 = 2', () => {
  const x = 1;
  const y = 2;
  const result = sum(x, y);

  expect(result).toBe(3);
});
