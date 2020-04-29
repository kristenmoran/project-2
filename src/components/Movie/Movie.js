import React from 'react';

function Movie({ films }) {
	// if (films.length === 0) {
	// 	return <div className='loadingMovie'>Loading Movie</div>;
	// }

	// let movie = this.films.find((movie) => movie.title === this.match.title)
	// console.log(movie)

	return (
		<div className='movieContainer'>
			{/* {films &&
				films.map((movie) => (
					<section key={movie.id} className='descriptionContainer'>
						<h1 key={movie.id} className='movieTitle'>
							{movie.title}
						</h1>
						<h3 key={movie.id} className='releaseDate'>
							{movie.release_date}
						</h3>
						<h3 key={movie.id} className='director'>
							{movie.director}
						</h3>
						<p key={movie.id} className='movieDescription'>
							{movie.description}
						</p>
						<h6 key={movie.id} className='rtScore'>
							{movie.rt_score}
						</h6>
					</section>
				))} */}
		</div>
	);
}

export default Movie;
