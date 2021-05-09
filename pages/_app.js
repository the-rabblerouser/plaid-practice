import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>My page title</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />

				<meta charset="UTF-8" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
