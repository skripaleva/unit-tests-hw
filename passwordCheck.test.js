const { passwordCheck } = require('./passwordCheck');

test('Граница "Ни одно из условий не соблюдено"', () => {
    expect(passwordCheck('password')).toBeFalsy();
});

test('Граница "Не соблюдено одно из условий: наличие числа"', () => {
    expect(passwordCheck('Password+-')).toBeFalsy();
});

test('Значение рядом с границей "Не соблюдено одно из условий: наличие двух букв латинского алфавита в разных регистраха"', () => {
    expect(passwordCheck('password1*')).toBeFalsy();
});

test('Значение рядом с границей "Не соблюдено одно из условий: один символ из ряда ! ? . , + - * / ="', () => {
    expect(passwordCheck('Password22')).toBeFalsy();
});

test('Значение рядом с границей "Не соблюдено одно из условий: содержит не менее 10 символов"', () => {
    expect(passwordCheck('Pass5!')).toBeFalsy();
});

test('Граница "Соблюдены все условия"', () => {
    expect(passwordCheck('This is the 7th password I have come up with!')).toBeTruthy();
});