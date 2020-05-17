import accounts from '../mocks/accountsMock.json';

const promiseResponse = data =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve(data);
		}, 500);
	});

export const getAccounts = () => promiseResponse(accounts);
