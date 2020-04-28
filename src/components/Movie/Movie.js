import React from 'react';

function Movie({ films }) {
	return (
		<div className='movieContainer'>
			<section className='descriptionContainer'>
				<h1 className='movieTitle'>{films.title}</h1>
				<h3 className='releaseDate'>{films.release_date}</h3>
				<h3 className='director'>{films.director}</h3>
				<p className='movieDescription'>{films.description}</p>
				<h6 className='rtScore'>{films.rt_score}</h6>
			</section>
		</div>
	);
}

export default Movie;
