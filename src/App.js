import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getAccounts } from './services/requestMock';
import Board from './components/Board/Board';
import TimelinePage from './pages/TimelinePage';
import AddNewCardPage from './pages/AddNewCardPage';
import NotFoundPage from './pages/NotFoundPage';

import styles from './App.module.css';

import * as actions from './redux/accounts/actions';
class App extends Component {
	componentDidMount() {
		this.fetchAccounts();
	}

	fetchAccounts = () => {
		this.props.loadAccountsAction();
		return getAccounts()
			.then(accounts => this.props.loadAccountsSuccess(accounts))
			.catch(accounts => this.props.loadAccountsFailureAction());
	};

	handleSubmit = newAccount => this.props.addAccount(newAccount);

	renderTimelinePage = routeProps => (
		<TimelinePage {...routeProps} accounts={this.props.accounts} />
	);

	renderAddNewCardPage = routeProps => (
		<AddNewCardPage {...routeProps} handleSubmit={this.handleSubmit} />
	);

	render() {
		console.log(this.props.accounts);
		return (
			<Router>
				<Board accounts={this.props.accounts} />
				<div className={styles.pageContent}>
					<Switch>
						<Route
							path="/account/:accountId"
							render={this.renderTimelinePage}
						/>
						<Route
							path="/actions/add_card"
							render={this.renderAddNewCardPage}
						/>
						<Route component={NotFoundPage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = state => ({ accounts: state.accounts });

export { App };

export default connect(mapStateToProps, actions)(App);
