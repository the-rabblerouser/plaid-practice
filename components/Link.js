import React from 'react';
import { usePlaidLink } from 'react-plaid-link';

import styles from '../styles/Home.module.css';

const Link = ({ linkToken, setAccessToken }) => {
	const onSuccess = (token) => {
		setAccessToken(token);
	};

	const config = {
		token: linkToken,
		onSuccess,
	};

	const { open, ready } = usePlaidLink(config);

	return (
		<>
			<button className={styles.code} onClick={() => open()} disabled={!ready}>
				Link account
			</button>
		</>
	);
};

export default Link;
