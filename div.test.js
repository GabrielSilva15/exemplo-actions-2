const div = require('./div');

test('divisao convencional', () => {
  expect(div(10, 2)).toBe(5);
});


test('divisao por zero', () => {
    expect(div(5, 0)).toBe(0);
});
