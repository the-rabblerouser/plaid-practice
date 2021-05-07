import React, { useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';

const Link = (props) => {
	const onSuccess = useCallback((public_token, metadata) => {
		// send public_token to server
		const response = fetch('/api/set_access_token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ public_token }),
		});
		// Handle response ...
	}, []);

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
