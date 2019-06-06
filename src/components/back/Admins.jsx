import React, { useState, useEffect } from "react";
import { MovieData } from '../data/MovieData';
import '../Movie.css';
import { Table } from 'react-bootstrap';
import MovieSubmit from "./MovieSubmit";
import Admin from './Admin';
import { Modal, Button } from 'react-materialize';

const Admins = () => {

	const [films, setFilms] = useState();

	useEffect(() => {
		MovieData((result) => {
			setFilms(result);
		})
	}, [])

	return (
		<div>
			<Table striped bordered hover responsive size="sm">
				<thead>
					<tr>
						<th data-field="id">Id</th>
						<th data-field="name">Name</th>
						<th data-field="trailer">Trailer</th>
						<th data-field="poster">Poster</th>
						<th data-field="rotten">Rotten</th>
						<th data-field="year">Year</th>
						<th data-field="genre">Genre</th>
						<th data-field="actions">Actions</th>
					</tr>
				</thead>
				{films ?
					films.map((movie, index) => (
						<Admin key={index}
							name={movie.name}
							poster={movie.poster}
							id={movie.id}
							release_year={movie.date}
							trailer={movie.trailer}
							rotten={movie.rotten}
							genre={movie.genre} />
					))
					: 'Loading'}

			</Table>
			<Modal trigger={<Button >Add movie</Button>}>
				<MovieSubmit />
			</Modal>
		</div>
	)
};

export default Admins;