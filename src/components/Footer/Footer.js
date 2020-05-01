import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

function Footer() {
	let prevScrollPosition = window.pageYOffset;

	window.onscroll = function () {
		let currentScrollPosition = window.pageYOffset;
		if (prevScrollPosition > currentScrollPosition) {
			console.log('worked');
		} else {
			console.log('error');
		}
	};

	return (
		<div>
			<Navbar fixed='bottom' className='footerContainer'>
				<p className='contactInfo'>Made by Kristen Moran</p>
			</Navbar>
		</div>
	);
}

export default Footer;
