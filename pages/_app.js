import Head from 'next/head';
import '../styles/globals.css';

import { Provider } from 'react-redux';
import { useStore } from '../store';

function MyApp({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState);
	return (
		<>
			<Head>
				<title>Plaid</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />

				<meta charset="UTF-8" />
			</Head>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	);
}

export default MyApp;
