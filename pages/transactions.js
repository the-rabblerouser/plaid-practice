import React from 'react';
import { useSelector } from 'react-redux';

const Transactions = () => {
	const accessToken = useSelector(({ accessToken }) => accessToken);

	return <div>{accessToken}</div>;
};

export default Transactions;
