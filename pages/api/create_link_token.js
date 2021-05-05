import nextConnect from 'next-connect';

import { Client, environments } from 'plaid';

const { PLAID_CLIENT_ID, PLAID_SECRET } = process.env;

const client = new Client({
	clientID: PLAID_CLIENT_ID,
	secret: PLAID_SECRET,
	env: environments.sandbox,
});

// console.log(client);

const handler = nextConnect();

handler.post(async (req, res) => {
	try {
		// Get the client_user_id by searching for the current user
		const user = await User.find();
		const clientUserId = user.id;
		// Create the link_token with all of your configurations
		const tokenResponse = await client.createLinkToken({
			user: {
				client_user_id: clientUserId,
			},
			client_name: 'Plaid Test App',
			products: ['auth'],
			country_codes: ['US'],
			language: 'en',
			webhook: 'https://webhook.sample.com',
		});
		console.log(tokenResponse);
		res.json(tokenResponse);
	} catch (e) {
		// Display error on client
		return res.send({ error: e.message });
	}
});

export default handler;
