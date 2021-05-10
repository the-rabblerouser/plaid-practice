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
	const configs = {
		user: {
			client_user_id: '123-test-user-id',
		},
		client_name: 'Plaid Test App',
		products: ['auth', 'transactions'],
		country_codes: ['US'],
		language: 'en',
		account_filters: {
			depository: {
				account_subtypes: ['checking', 'savings'],
			},
		},
	};

	try {
		const response = await client.createLinkToken(configs);
		return res.send({ link_token: response.link_token });
	} catch (err) {
		return res.send({ err: err.message });
	}
});

export default handler;
