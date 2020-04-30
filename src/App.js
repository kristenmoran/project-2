import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import MovieList from './components/MovieList/MovieList';
import Movie from './components/Movie/Movie';
import Footer from './components/Footer/Footer';

function App() {
	const url = 'https://ghibliapi.herokuapp.com/films';
  const [films, setFilms] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setFilms(response);
			})
			.catch(console.error);
	}, []);

	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route path='/' exact={true} component={Homepage} />
				<Route
					path='/films'
					exact={true}
					render={(props) => <MovieList films={films} />}
				/>
				<Route
					path='/films/:id'
					exact={true}
					render={(props) => <Movie match={props.match} films={films} />}
				/>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
