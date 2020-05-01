import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Movie.css';
import MovieImage from '../MovieImage/MovieImage';
import MovieVideo from '../MovieVideo/MovieVideo';

function Movie({ match }) {
	const url = 'https://ghibliapi.herokuapp.com/films';
	const [movie, setMovie] = useState({});
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				let currentMovie = response.find(({ id }) => id === match.params.id);
				setMovie(currentMovie);
			})
			.catch(console.error);
	}, [match.params.id]);

	if (!movie) return null;

	return (
		<div className='movieContainer'>
			<Container>
				<Row>
					<div className='originalPoster col-md-6'>
						<MovieImage movieId={movie.id} />
					</div>
					{movie ? (
						<Col>
							<div key={movie.id} className='descriptionContainer col-md-12'>
								<h1 className='movieTitle'>{movie.title}</h1>
								<h3 className='director'>Director: {movie.director}</h3>
								<h3 className='releaseDate'>{movie.release_date}</h3>
								<p className='movieDescription'>{movie.description}</p>
								<h6 className='rtScore'>
									Rotten Tomatoes Score: {movie.rt_score}%
								</h6>
							</div>
						</Col>
					) : (
						<p>Loading</p>
					)}
				</Row>
                <h3 className='trailerHeading'>Watch the trailer</h3>
				<MovieVideo movieId={movie.id} className='trailer col-md-12' />
			</Container>
		</div>
	);
}

export default Movie;
