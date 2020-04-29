import React from 'react';

function Movie({ films, match }) {
	let movie = films.find(({ title }) => title === match.params.title);

	return (
		<div className='movieContainer'>
			{movie ? (
				<section key={movie.id} className='descriptionContainer'>
					<h1 className='movieTitle'>{movie.title}</h1>
					<h3 className='releaseDate'>{movie.release_date}</h3>
					<h3 className='director'>{movie.director}</h3>
					<p className='movieDescription'>{movie.description}</p>
					<h6 className='rtScore'>{movie.rt_score}</h6>
				</section>
			) : (
				<p>Loading</p>
			)}
		</div>
	);
}

export default Movie;
