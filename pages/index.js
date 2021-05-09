import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Link from '../components/Link';

const App = () => {
	const [linkToken, setLinkToken] = useState(null);
	const [access_token, setAccess_token] = useState();

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

	const setAccessToken = async (public_token) => {
		// send public_token to server
		const res = await axios.post('/api/set_access_token', {
			public_token,
		});
		// // Handle response ...
		const data = res.data.access_token;
		setAccess_token(data);
	};

	console.log(access_token);
	return linkToken != null ? (
		<Link linkToken={linkToken} setAccessToken={setAccessToken} />
	) : (
		<></>
	);
};

export default App;
