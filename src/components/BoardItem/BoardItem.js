import React from 'react';
import cn from 'classnames';

import Money from '../Money/Money';

import { getCurrencyChar } from '../../utils/currencies';

import styles from './BoardItem.module.css';

export default ({ type, customTitle, title, currency, amount }) => {
	const showCurrencyIcon = type === 'debit' || type === 'credit';
	const renderMoney = type !== 'external';

	return (
		<div className={styles.item}>
			<div className={cn(styles.logo, styles[`logo_${type}`])}>
				{showCurrencyIcon && getCurrencyChar(currency)}
			</div>
			<div className={styles.title}>
				{customTitle || title}
				{renderMoney && (
					<div>
						<Money value={amount} currency={currency} />
					</div>
				)}
			</div>
		</div>
	);
};
