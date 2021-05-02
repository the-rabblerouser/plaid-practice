import Head from 'next/head';
import { useState, useEffect } from 'react';

import axios from 'axios';

import styles from '../styles/Home.module.css';

export default function Home() {
	const [token, setToken] = useState(null);

	useEffect(() => {
		async () => {
			const res = await axios.post('localhost:3000/api/create_link_token');
			const data = res.data.link_token;
			setToken(data);
		};
	}, []);

	console.log(token);

	return (
		<div className={styles.container}>
			<>
				<div className="App">
					//Passes down created Link token to Link component
					{/* <Link token={token} /> */}
				</div>
			</>
		</div>
	);
}
