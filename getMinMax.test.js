const { getMinMax } = require('./getMinMax');


test('Граница "Отсутствие числа в строке', () => {
    expect(getMinMax('Число в строке отсутствует')).toStrictEqual({ max: -Infinity, min: Infinity });
});

test('Граница "В строке присутствует слово Infinity', () => {
    expect(getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear 4 times in a row')).toStrictEqual({ max: Infinity, min: 4 });
});

test('Граница "В строке присутствует -Infinity', () => {
    expect(getMinMax('"To -Infinity and beyond", - repeated Buzz Lightyear 4 times in a row')).toStrictEqual({ max: 4, min: -Infinity });
});

test('Граница "В строке только одно число 1', () => {
    expect(getMinMax('"В строке только одно число 2')).toStrictEqual({ max: 2, min: 2 });
});

test('Значение рядом с границей "В строке присутствует слово Infinity и отсутствуют числа', () => {
    expect(getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear')).toStrictEqual({ max: Infinity, min: Infinity });
});

test('Граница "Числа имеет дробную часть', () => {
    expect(getMinMax('1 и 6.45, -2, но 8, а затем 15.15, то есть 2.7 и -1028')).toStrictEqual({ min: -1028, max: 15.15 });
});