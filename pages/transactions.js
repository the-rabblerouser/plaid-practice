import { useSelector } from 'react-redux';

const Transactions = () => {
	const transactions = useSelector(({ transactions }) => transactions);

	return (
		<>
			<h1>Transactions</h1>
			<div className="transactions">
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
								<br />
							</div>
						);
					}
				)}
			</div>
			<style jsx>{`
				table {
					border-collapse: collapse;
				}

				.transactions {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					grid-template-rows: 1fr 1fr 1fr;
				}
			`}</style>
		</>
	);
};

export default Transactions;
