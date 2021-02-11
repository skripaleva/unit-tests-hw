const { groupBy } = require('./groupBy');

let fn;
describe("Проверка fn, которая групирует по значению", () => {
    beforeEach(() => {
        fn = (value, key, obj) => {
            return value;
        };
    });

    test('Тест "Передан пустой объект"', () => {
        expect(groupBy(fn, {})).toStrictEqual({});
    });

    test('Тест "Есть ключи с одинаковым значением"', () => {
        expect(groupBy(fn, {a: 1, b: 1, c: 3})).toStrictEqual({'1': [1, 1], '3': [3]});
    });

    test('Тест "Нет ключей с одинаковым значением"', () => {
        expect(groupBy(fn, {a: 1, b: 2, c: 3})).toStrictEqual({'1': [1], '2': [2], '3': [3]});
    });

});

describe("Проверка fn, которая групирует по ключу", () => {

    beforeEach(() => {
        fn = (value, key, obj) => {
            return key;
        };
    });

    test('Тест "Передан пустой объект"', () => {
        expect(groupBy(fn, {})).toStrictEqual({});
    });

    test('Тест "Переданы два одинаковых ключа с одним значением"', () => {
        expect(groupBy(fn, {a: 1, a: 1, c: 3})).toStrictEqual({'a': [1], 'c': [3]});
    });

    test('Тест "Переданы два одинаковых ключа с разным значением"', () => {
        expect(groupBy(fn, {a: 1, a: 2, c: 3})).toStrictEqual({'a': [2], 'c': [3]});
    });

    test('Тест "Переданы уникальные ключи"', () => {
        expect(groupBy(fn, {a: 1, b: 1, c: 3})).toStrictEqual({'a': [1], 'b': [1], 'c': [3]});
    });

});