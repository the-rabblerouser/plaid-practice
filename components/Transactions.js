import { useSelector } from 'react-redux';

import style from '../styles/Home.module.css';

const Transactions = () => {
	const transactions = useSelector(({ transactions }) => transactions);

	return (
		<>
			<div className={style.container}>
				<div className="nav-contain">
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
										<hr />
									</div>
								);
							}
						)}
					</div>
				</div>
			</div>

			<style jsx>{`
				.nav-contain {
					display: flex;
					flex-direction: column;
				}

				table {
					border-collapse: collapse;
				}

				.transactions {
					margin-top: 3rem;
					display: grid;
					grid-template-columns: 1fr;
					grid-template-rows: 1fr 1fr 1fr;
				}
			`}</style>
		</>
	);
};

export default Transactions;
