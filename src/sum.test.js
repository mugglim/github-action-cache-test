const sum = require('./sum');

describe('sum(x,y) = x+y', () => {
  test('1 + 1 = 2', () => {
    const x = 1;
    const y = 2;
    const result = sum(x, y);

    expect(result).toBe(3);
  });

  test('2 + 3 = 5', () => {
    const x = 2;
    const y = 3;
    const result = sum(2, 3);

    expect(result).toBe(5);
  });
});
