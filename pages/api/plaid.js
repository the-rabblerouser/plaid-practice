import nextConnect from 'next-connect';

import { Client, environments } from 'plaid';

const { PLAID_CLIENT_ID, PLAID_SECRET } = process.env;

const client = new Client({
	clientID: PLAID_CLIENT_ID,
	secret: PLAID_SECRET,
	env: environments.sandbox,
});

console.log(client);

const handler = nextConnect();

handler.get((req, res) => {
	res.status(200).json({ name: 'plaid' });
});

export default handler;
