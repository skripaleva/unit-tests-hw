const { commission } = require('./commission');

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

function test(text, a, res) {
    let flyDate = Date.now() + MILLISECONDS_IN_DAY*a;
    if (commission(flyDate) === res) {
        console.log(text, 'Успех');
    } else {
        console.log(text, 'Ошибка');
    }
}


test('Граница a = 0', 0, 75);
test('Значение рядом с границей a = -1', -1, 100);

test('Границей a = 1', 1, 50);
test('Значение рядом с границей a = 2', 2, 50);

test('Граница a = 5 суток', 5, 20);
test('Значение рядом с границей a = 4', 4, 50);
test('Значение рядом с границей a = 6', 6, 20);

test('Граница a = 10 суток', 10, 0);
test('Значение рядом с границей a = 9', 9, 20);
test('Значение рядом с границей a = 11', 11, 0);