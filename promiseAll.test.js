const { promiseAll } = require("./promiseAll");


describe("Проверка promiseAll",()=>{

    const promise1 = new Promise(resolve => {
        resolve(0);
    });
    const promise2 = new Promise(resolve => {
        resolve(2);
    });

    const promise3 = new Promise(resolve => {
        resolve(5);
    });

    const promiseArr = [
        promise1,
        promise2,
        promise3
    ];

    test('Проверка return promiseAll с валидными параметрами', async ()=>{
        const result =  await promiseAll(promiseArr);
        expect(result).toEqual([0, 2, 5])
    });
    test('Проверка return promiseAll количество', async ()=>{
        const result =  await promiseAll(promiseArr);
        expect(result).toHaveLength(3)
    });

    test('Проверка с не валидным значением', async ()=>{
        expect( promiseAll([])).rejects.toBe("empty arr")
    })
});