import React from 'react';
import CardImg from 'react-bootstrap/CardImg';
import Posters from '../../imgs/posters/Posters';
import images from '../../imgs/posters/imagesUrl'

function CardImage(props) {
	let moviePoster = Posters.find((poster) => props.movieId === poster.id);
	
	let image = images.find((image) => props.movieId === image.id);

	if (!moviePoster || !image) return null;

	console.log(moviePoster);

	return (
		<div>
			<CardImg
				className='img-fluid'
				variant='top'
				src={image.poster}
				key={moviePoster.title}
				alt={moviePoster.title}
			/>
			{/* <img src={Image} alt='movie poster' /> */}
		</div>
	);
}

export default CardImage;
