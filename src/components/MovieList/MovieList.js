import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Poster from '../../imgs/posters/myneighbortotoro.jpg';

function MovieList({ films }) {
	if (films.length === 0) {
		return <div className='loading'>Loading Movies</div>;
	}

	return (
		<Container>
			<Row>
				<div className='movieListContainer'>
					{films &&
						films.map((movie) => (
							<Col sm={true} key={movie.id} className='mb-3'>
								<Card
									style={{ width: '18rem', display: 'inline-block' }}
									key={movie.id}
									className='filmsList text-center'>
									<Card.Img variant='top' src={Poster} alt={movie.title} />
									<Link
										to={`/films/${movie.title}`}
										className='films'
										key={movie.id}>
										{movie.title}
									</Link>
								</Card>
							</Col>
						))}
				</div>
			</Row>
		</Container>
	);
}

export default MovieList;
