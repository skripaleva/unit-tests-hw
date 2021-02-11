const { getIntersection } = require('./getIntersection');

describe("Проверка  getIntersection", () => {

    test('Тест "В одном из массивов нет значений"', () => {
        expect(getIntersection([5, 7, 9], [])).toStrictEqual([]);
    });

    test('Тест "В массивах нет общих значений"', () => {
        expect(getIntersection([5, 7, 9], [1, 2, 3, 4])).toStrictEqual([]);
    });

    test('Тест "В массивах есть общие значения"', () => {
        expect(getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4])).toStrictEqual([1, 3]);
    });

    test('Тест "В массивах есть общие значения, среди них есть повторяющиеся"', () => {
        expect(getIntersection([1, 1, 2], [2, 1, 1, 1])).toStrictEqual([1, 1, 2]);
    });

    test('Тест "Два одинаковых массива"', () => {
        expect(getIntersection([5, 7, 9], [5, 7, 9])).toStrictEqual([5, 7, 9]);
    });

    test('Тест "Проверка сортировки"', () => {
        expect(getIntersection([9, 7, 3, 2], [9, 7, 2])).toStrictEqual([2, 7, 9]);
    });

    test('Тест "Отрицательные значения"', () => {
        expect(getIntersection([9, -7, -3, -2], [9, -7, 2])).toStrictEqual([-7, 9]);
    });

    test('Тест "Повторяющиеся числа внутри двух массивов"', () => {
        expect(getIntersection([9, 7, 9, 2, 2], [2, 9, 7, 2, 9, 1])).toStrictEqual([2, 2, 7, 9, 9]);
    });
});