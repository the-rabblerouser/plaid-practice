import React from 'react';

const Link = (props) => {
	const { open, ready } = usePlaidLink(config);

	const config = {
		token: props.linkToken,
		onSuccess,
	};
	return (
		<>
			<button onClick={() => open()} disabled={!ready}>
				Link account
			</button>
		</>
	);
};

export default Link;
