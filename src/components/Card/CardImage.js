import React from 'react';
import CardImg from 'react-bootstrap/CardImg';
import Posters from '../../imgs/posters/Posters';

function CardImage(props) {
	let moviePoster = Posters.find((poster) => props.movieId === poster.id);

	console.log(moviePoster);

	return (
		<div>
			<CardImg
				className='img-fluid'
				variant='top'
				src={moviePoster.poster}
				key={moviePoster.title}
				alt={moviePoster.title}
			/>
			{/* <img src={Image} alt='movie poster' /> */}
		</div>
	);
}

export default CardImage;
