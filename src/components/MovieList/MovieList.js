import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

function MovieList({ films }) {
	if (films.length === 0) {
		return <div className='loading'>Loading Movies</div>;
	}

	return (
		<div className='movieListContainer container-fluid'>
			{films &&
				films.map((movie) => (
					<div key={movie.id} className='filmsList row justify-content-center'>
						<Link
							to={`/films/${movie.title}`}
							className='films col col-sm-12 col-lg-6 text-center'
							key={movie.id}>
							{movie.title}
						</Link>
					</div>
				))}
		</div>
	);
}

export default MovieList;
