import React, { useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';

const Link = (props) => {
	const onSuccess = (token, metadata) => {
		// console.log('onSuccess', token, metadata);
		props.setAccessToken(token);
	};

	const config = {
		token: props.linkToken,
		onSuccess,
	};

	const { open, ready } = usePlaidLink(config);

	return (
		<>
			<button onClick={() => open()} disabled={!ready}>
				Link account
			</button>
		</>
	);
};

export default Link;
