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
		const { public_token } = req.body;

		const { access_token, item_id } = await client.exchangePublicToken(
			public_token
		);

		res.send({ access_token, item_id });
	} catch (e) {
		if (!publick_token) {
			return 'no public token';
		}
	}
});

export default handler;
