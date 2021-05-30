import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-light bg-light">
				<div className="container">
					<Link href="/">
						<a className="navbar-brand">Home</a>
					</Link>
					<div>
						<Link href="/">
							<a className="me-3">Sign Up</a>
						</Link>

						<Link href="/login">
							<a>Login</a>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
