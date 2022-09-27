const sum = require('./sum');

describe('sum(x,y) = x+y', () => {
  test('1 + 1 = 2', () => {
    expect(sum(1, 1)).toBe(2);
  });

  test('2 + 3 = 5', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('3 + 5 = 8', () => {
    expect(sum(3, 5)).toBe(8);
  });

  test('5 + 8 = 13', () => {
    expect(sum(5, 8)).toBe(13);
  });
});
