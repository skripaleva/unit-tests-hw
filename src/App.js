import React, { Component } from 'react';

import Board from './components/Board/Board';

import { getAccounts } from './services/requestMock';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			accounts: [],
		};
	}

	componentDidMount() {
		this.fetchAccounts();
	}

	fetchAccounts = () =>
		getAccounts().then(accounts => this.setState({ accounts }));

	render() {
		return <Board accounts={this.state.accounts} />;
	}
}

export default App;
