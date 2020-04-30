import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardImage from '../Card/CardImage';

function MovieList({ films }) {
	if (films.length === 0) {
		return <div className='loading'>Loading Movies</div>;
	}

	return (
		<div className='movieListContainer'>
			<h1 className='moviesTitle'>The Movies of Studio Ghibli</h1>
			<h4 className='toDoDescription'>Select a film for more details</h4>
			<Container className='container-fluid d-flex justify-content-center'>
				<Row>
					{films &&
						films.map((movie) => (
							<Col sm={true} key={movie.id} className='mb-3 col-lg-4 col-m2-12'>
								<Card
									style={{ width: '18rem' }}
									key={movie.id}
									className='filmsList text-center'>
									<CardImage movieId={movie.id} />
									<Link
										to={`/films/${movie.id}`}
										className='films btn stretched-link'
										key={movie.id}>
										{movie.title}
									</Link>
								</Card>
							</Col>
						))}
				</Row>
			</Container>
		</div>
	);
}

export default MovieList;
