const sum = require('./sum');

test('suma 1 + 2 igual a 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('suma -1 + 1 igual a 0', () => {
    expect(sum(-1, 1)).toBe(0);
});