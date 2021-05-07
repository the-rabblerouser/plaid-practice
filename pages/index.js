import React, { useEffect, useState, useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';

const App = () => {
	const [linkToken, setLinkToken] = useState(null);

	//currently linktoken is not being created on create_link_token api
	const generateToken = async () => {
		const response = await fetch('/api/create_link_token', {
			method: 'GET',
		});
		const data = await response.json();
		setLinkToken(data.link_token);
	};
	useEffect(() => {
		generateToken();
	}, []);

	return linkToken != null ? <Link linkToken={linkToken} /> : <></>;
};

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

export default App;
