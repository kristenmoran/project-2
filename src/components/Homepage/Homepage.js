import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Logo from '../../imgs/studioghiblilogo.png';
import MovieCollage from '../../imgs/collage.jpg';

function Homepage() {
	return (
		<div className='homepageContainer'>
			<img className='studioGhibliLogo' src={Logo} alt='Studio Ghibli Logo' />
			<main>
				<p className='about'>
					Studio Ghibli is a Japanese animation film studio known for its high
					quality filmmaking and artistry. Garnering numerous awards and
					critical acclaim, Studio Ghibli's feature films are some of the most
					beloved and influential animated works across the globe.
				</p>
			</main>
			<section className='exploreContainer'>
				<img className='movieCollage' src={MovieCollage} alt='film collage' />
				<Link to='/films' className='exploreFilms'>
					Explore Films
				</Link>
			</section>
		</div>
	);
}

export default Homepage;
