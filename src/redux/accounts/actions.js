export function loadAccountsAction() {
	return { type: 'LOAD_ACCOUNTS' };
}

export function loadAccountsFailureAction() {
	return { type: 'LOAD_ACCOUNTS_FAILURE' };
}

export const loadAccountsSuccess = payload => {
	return { type: 'LOAD_ACCOUNTS_SUCCESS', payload };
};

export const addAccount = payload => {
	return { type: 'ADD_ACCOUNT', payload };
};

export const changeAccountTitle = payload => {
	return { type: 'CHANGE_ACCOUNT_TITLE', payload };
};

export const removeExternalAccount = payload => {
	return { type: 'REMOVE_EXTERNAL_ACCOUNT', payload };
};
