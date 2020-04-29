import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

function MovieList({ films }) {
	if (films.length === 0) {
		return <div className='loading'>Loading Movies</div>;
	}

	return (
		<div className='movieListContainer container-fluid row row-cols-2' >
			{films &&
				films.map((movie) => (
					<div key={movie.id} className='filmsList'>
						<Link
							to={`/films/${movie.title}`}
							className='films col-lg text-center'
							key={movie.id}>
							{movie.title}
						</Link>
					</div>
				))}
		</div>
	);
}

export default MovieList;
