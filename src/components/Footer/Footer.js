import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

function Footer() {
	return (
		<div>
			<Navbar fixed='bottom' className='footerContainer'>
				<p className='contactInfo'>
					Made by
					<a
						className='linkedin'
						href='https://github.com/kristenmoran'
						target='_blank'
						rel='noopener noreferrer'>
						Kristen Moran
					</a>
				</p>
			</Navbar>
		</div>
	);
}

export default Footer;
