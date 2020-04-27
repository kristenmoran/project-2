import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	return (
		<header className='container'>
			<nav className='navContainer'>
				<Link className='homepage' to=''>
					Home
				</Link>
				<Link className='moviesButton' to=''>
					Movies
				</Link>
				<Link className='contact' to='_blank'>
					Contact
				</Link>
			</nav>
		</header>
	);
}

export default Header;
