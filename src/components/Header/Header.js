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
							<Link className='homepage' to='/'>
								Home
							</Link>
						</li>
						<li>
							<Link className='moviesButton' to='/films'>
								Movies
							</Link>
						</li>
						<li>
							<Link className='contact' to='_blank'>
								Search
							</Link>
						</li>
					</ul>
				</div>
				<Link to='/' className='burger'>
					<div className='line1'></div>
					<div className='line2'></div>
					<div className='line3'></div>
				</Link>
			</nav>
		</header>
	);
}

export default Header;
