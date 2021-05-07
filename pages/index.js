import React, { useEffect, useState } from 'react';

import Link from '../components/Link';

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

export default App;
