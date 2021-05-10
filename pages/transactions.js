import { useSelector } from 'react-redux';

const Transactions = () => {
	const transactions = useSelector(({ transactions }) => transactions);

	return (
		<>
			<h1>Transactions</h1>
			{transactions[0]?.map(
				({ transaction_id, date, name, category, amount }) => {
					return (
						<div
							key={transaction_id}
							style={{ marginLeft: '1rem', width: '20rem' }}>
							<h3>{date}</h3>
							<div>{name}</div>
							<br />
							<div>${amount}</div>
							<br />
							<div>{category[0]}</div>
							<hr />
						</div>
					);
				}
			)}
			<style jsx>{`
				table {
					border-collapse: collapse;
				}

				td,
				th {
					border: 1px solid #999;
					padding: 0.5rem;
					text-align: left;
				}
			`}</style>
		</>
	);
};

export default Transactions;
