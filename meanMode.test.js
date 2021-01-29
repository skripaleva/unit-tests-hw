const { meanMode } = require('./meanMode');

test('Граница "Пустой массив"', () => {
    expect(meanMode([])).toBeFalsy();
});

test('Граница "Массив из одного числа"', () => {
    expect(meanMode([1])).toBeTruthy();
});

test('Граница "Cреднее значение равно числу встречающемуся чаще остальных"', () => {
    expect(meanMode([4, 4, 4, 6, 2])).toBeTruthy();
});

test('Cреднее значение не равно числу встречающемуся чаще остальных', () => {
    expect(meanMode([1, 1, 1, 2, 5])).toBeFalsy();
});

test('Граница "Все числа встречаются один раз"', () => {
    expect(meanMode([1, 2, 3])).toBeFalsy();
});


