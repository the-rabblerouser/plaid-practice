import React from 'react';
import { useSelector } from 'react-redux';

import Navbar from '../components/Navbar';
import Transactions from '../components/Transactions';

import styles from '../styles/Home.module.css';

const App = () => {
	const accessToken = useSelector(({ accessToken }) => accessToken);

	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<h1>Transactions</h1>
				{!!accessToken && <Transactions />}
			</div>
		</>
	);
};

export default App;
