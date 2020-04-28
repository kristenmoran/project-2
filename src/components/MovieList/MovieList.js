import React from 'react';
import './MovieList.css'

function MovieList({ films }) {
	if (films.length === 0) {
		return <div className='loading'>Loading Movies</div>;
	}

	return (
		<div className='movieListContainer'>
			{films && films.map((movie) => <p className='filmList' key={movie.id}>{movie.title}</p>)}
		</div>
	);
}

export default MovieList;
