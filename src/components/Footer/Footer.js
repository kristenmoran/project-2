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
						href='https://www.linkedin.com/in/kristenlmoran/'
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
