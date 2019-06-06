import React from "react";
import Movie from '../front/Movie';
import '../Movie.css';
import { Row } from "react-bootstrap";

const MovieSelect = (props) => {
	return (
		<div className='container-fluid' >
			<Row className='random_movie_div col-12 mt-3'>
				<h4>Showing only <em>{props.movies[0].genre.toLowerCase()}</em> genre:</h4>
			</Row>
			{props.movies ?
				props.movies.map((movie, index) => (
					<div key={index}>
						<Movie key={index}
							name={movie.name}
							poster={movie.poster}
							id={movie.id}
							release_year={movie.date}
							trailer={movie.trailer}
							rotten={movie.rotten}
							genre={movie.genre}
						/>
						<hr></hr>
					</div>
				))
				: 'Loading...'}
		</div >

	)
};

export default MovieSelect;