import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { set_link_token } from '../actions/set_link_token';
import { set_access_token } from '../actions/set_access_token';

import Link from '../components/Link';

const App = () => {
	const router = useRouter();

	const linkToken = useSelector(({ linkToken }) => linkToken);

	const dispatch = useDispatch();

	const generateToken = async () => {
		// get public_token
		const response = await fetch('/api/create_link_token', {
			method: 'GET',
		});
		const data = await response.json();
		dispatch(set_link_token(data.link_token));
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
		dispatch(set_access_token(data));

		router.push('/transactions');
	};

	return linkToken != null ? (
		<Link linkToken={linkToken} setAccessToken={setAccessToken} />
	) : (
		<></>
	);
};

export default App;
