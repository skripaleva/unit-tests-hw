import React from 'react';

import styles from './Button.module.css';

const noop = () => {};

/**
 * Код реализации компоента Button в файле Button.js
 *
 * Компонент Button
 * Пример использования: <Button onClick={this.handleClick}>Кнопка</Button>
 * Параметр: type - тип кнопки
 * Параметр: children - текст кнопки
 * Параметр: onClick - callback, обработчик события клика по кнопке
 */
export default ({ onClick = noop, children, ...rest }) => (
	<button className={styles.button} onClick={onClick} {...rest}>
		{children}
	</button>
);
