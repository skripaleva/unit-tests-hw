const reducer = (state = [], action) => {
	switch (action.type) {
		case 'LOAD_ACCOUNTS':
			return null;
		case 'LOAD_ACCOUNTS_FAILURE':
			return null;
		case 'LOAD_ACCOUNTS_SUCCESS':
			return action.payload;
		case 'ADD_ACCOUNT':
			return [...state, action.payload];
		default:
			return state;
	}
};

export default reducer;
