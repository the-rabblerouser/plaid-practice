import nextConnect from 'next-connect';

import { Client, environments } from 'plaid';

const { PLAID_CLIENT_ID, PLAID_SECRET } = process.env;

const client = new Client({
	clientID: PLAID_CLIENT_ID,
	secret: PLAID_SECRET,
	env: environments.sandbox,
});

const handler = nextConnect();

handler.get(async (req, res) => {
	try {
		const { publick_token } = req.body;

		const res = await client.exchangePublicToken(publick_token);

		// const itemId = res.item_id;
		return res.send({ access_token: res.access_token });
	} catch (e) {
		if (!publick_token) {
			return 'no public token';
		}
	}
});

export default handler;
