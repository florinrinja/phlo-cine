import React, { useContext } from "react";
import Movie from '../front/Movie';
// import './RandomStyle.css';

import { Context } from '../../App';
import { Row } from "react-bootstrap";

const MovieRandom = () => {
	const [movies] = useContext(Context);
	const random = movies[Math.floor((Math.random() * movies.length))];

	return (
		<div className='container-fluid'>
			<Row className='random_movie_div col-12 mt-3'>
				<h4>Your random movie:</h4>
			</Row>
			<Movie
				name={random.name}
				poster={random.poster}
				id={random.id}
				release_year={random.date}
				trailer={random.trailer}
				rotten={random.rotten}
				genre={random.genre}
			/>
		</div >
	)
};

export default MovieRandom;