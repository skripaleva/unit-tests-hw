import React from 'react';
import MaskedInput from 'react-maskedinput';
import cn from 'classnames';

import Button from '../Button/Button';

import styles from './NewAccountForm.module.css';

import {
	monthIsValid,
	fieldIsEmpty,
	cardExpired,
} from '../../utils/validators';

const emptyState = {
	cardNumber: '',
	year: '',
	month: '',
	error: '',
};

export default class NewAccountForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = emptyState;
	}

	clearForm() {
		this.setState(emptyState);
	}

	hasEmptyFields = () =>
		['cardNumber', 'year', 'month'].some(field =>
			fieldIsEmpty(this.state[field])
		);

	formIsValid() {
		return (
			!this.hasEmptyFields() &&
			monthIsValid(this.state.month) &&
			!cardExpired(this.state.month, this.state.year)
		);
	}

	setFormError() {
		const errors = [
			{
				text: 'Необходимо заполнить все поля формы',
				matched: this.hasEmptyFields(),
			},
			{
				text: 'Поле месяц может принимать значения от 1 до 12',
				matched: !monthIsValid(this.state.month),
			},
			{
				text: 'Срок действия карты истек',
				matched: cardExpired(this.state.month, this.state.year),
			},
		];

		const currentError = errors.find(error => error.matched);

		if (currentError) {
			this.setState({ error: currentError.text });
		}
	}

	handleSubmit = event => {
		event.preventDefault();

		if (!this.formIsValid()) {
			this.setFormError();
			return;
		}

		this.props.handleSubmit({
			id: Date.now(),
			type: 'external',
			title: `Привязанная карта *${this.state.cardNumber.slice(-4)}`,
		});

		this.clearForm();
	};

	handleInputChange = event => {
		this.setState({
			error: '',
			[event.target.name]: event.target.value,
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className={styles.cardForm}>
					<MaskedInput
						mask="1111 1111 1111 1111"
						name="cardNumber"
						value={this.state.cardNumber}
						onChange={this.handleInputChange}
						placeholder="Номер карты"
						className={styles.input}
					/>
					<div className={styles.label}>VALID THRU</div>
					<div className={styles.validThruFieldset}>
						<MaskedInput
							mask="11"
							type="text"
							name="month"
							value={this.state.month}
							onChange={this.handleInputChange}
							placeholder="MM"
							className={cn(styles.input, styles.inputDate)}
						/>
						/
						<MaskedInput
							mask="11"
							type="text"
							name="year"
							value={this.state.year}
							onChange={this.handleInputChange}
							placeholder="YY"
							className={cn(styles.input, styles.inputDate)}
						/>
					</div>
					{this.state.error && (
						<div className={styles.errorWrapper}>{this.state.error}</div>
					)}
					<Button type="submit">Привязать</Button>
				</div>
			</form>
		);
	}
}
