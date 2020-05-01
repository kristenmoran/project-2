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
				<div className='navLinks'>
					<ul className='navList'>
						<li>
							<Link className='moviesButton' to='/films'>
								Movies
							</Link>
						</li>
						<li>
							<Link className='contact' to='_blank'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;
