import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { set_link_token } from '../actions/set_link_token';
import { set_access_token } from '../actions/set_access_token';
import Link from '../components/Link';

const App = () => {
	const linkToken = useSelector(({ linkToken }) => linkToken);
	const accessToken = useSelector(({ accessToken }) => accessToken);
	// const [linkToken, setLinkToken] = useState(null);
	// const [access_token, setAccess_token] = useState();

	const dispatch = useDispatch();

	//currently linktoken is not being created on create_link_token api
	const generateToken = async () => {
		const response = await fetch('/api/create_link_token', {
			method: 'GET',
		});
		const data = await response.json();
		// setLinkToken(data.link_token);
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
	};

	console.log(accessToken);
	return linkToken != null ? (
		<Link linkToken={linkToken} setAccessToken={setAccessToken} />
	) : (
		<></>
	);
};

export default App;
