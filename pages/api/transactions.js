import nextConnect from 'next-connect';

import { Client, environments } from 'plaid';

const { PLAID_CLIENT_ID, PLAID_SECRET } = process.env;

const client = new Client({
	clientID: PLAID_CLIENT_ID,
	secret: PLAID_SECRET,
	env: environments.sandbox,
});

const handler = nextConnect();

handler.post(async (req, res) => {
	try {
		const { accessToken } = req.body;

		const response = await client.getTransactions(
			accessToken,
			'2021-04-01',
			'2021-05-31',
			{
				count: 250,
				offset: 0,
			}
		);
		const transactions = response.transactions;

		res.send({ transactions });
	} catch (err) {
		if (!accessToken) {
			return 'no access token';
		}
	}
});

export default handler;
