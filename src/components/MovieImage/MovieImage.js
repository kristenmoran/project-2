import React from 'react';
import Posters from '../../imgs/posters/Posters';
import images from '../../imgs/posters/imagesUrl';
import './MovieImage.css'

function MovieImage(props) {
	let moviePoster = Posters.find((poster) => props.movieId === poster.id);

	let image = images.find((image) => props.movieId === image.id);

	if (!moviePoster || !image) return null;

	return (
		<img
			className='originalPoster img-fluid'
			variant='top'
			src={image.poster}
			key={moviePoster.title}
			alt={moviePoster.title}
		/>
	);
}

export default MovieImage;
