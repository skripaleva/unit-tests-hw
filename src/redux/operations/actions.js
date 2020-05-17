export function loadOperationsAction() {
	return { type: 'LOAD_OPERATIONS' };
}

export function loadOperationsFailureAction() {
	return { type: 'LOAD_OPERATIONS_FAILURE' };
}

export const loadOperationsSuccess = payload => {
	return { type: 'LOAD_OPERATIONS_SUCCESS', payload };
};
