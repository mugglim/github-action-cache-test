const sum = require('./sum');

describe('sum(x,y) = x+y', () => {
  test('1 + 1 = 2', () => {
    const x = 1;
    const y = 1;
    expect(sum(x, y)).toBe(2);
  });

  test('2 + 3 = 5', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('3 + 5 = 8', () => {
    const x = 3;
    const y = 5;

    expect(sum(x, y)).toBe(8);
  });
});
