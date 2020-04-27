import React from 'react';
import './Homepage.css';
import Logo from '../../imgs/studioghiblilogo.png';

function Homepage() {
	return (
		<div className='homepageContainer'>
			<img className='studioGhibliLogo' src={Logo} alt='Studio Ghibli Logo' />
			<main>
				<p className='about'>
					Studio Ghibli is a Japanese animation film studio known for its high
					quality filmmaking and artistry. Garnering numerous awards and
					critical acclaim, Studio Ghibli's feature films are some of the most
					beloved animated works across the globe.
				</p>
			</main>
		</div>
	);
}

export default Homepage;
