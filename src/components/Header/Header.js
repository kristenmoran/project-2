import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	return (
		<header className='container'>
			<nav className='navContainer'>
				<Link className='appName' to='/'>
					Studio Ghibli Database
				</Link>
				<Link className='homepage' to='/'>
					Home
				</Link>
				<Link className='moviesButton' to='/films'>
					Movies
				</Link>
				<Link className='contact' to='_blank'>
					Search
				</Link>
			</nav>
		</header>
	);
}

export default Header;
