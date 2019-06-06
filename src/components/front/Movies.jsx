import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import '../Movie.css';
import { MovieData } from '../data/MovieData';
import { Form } from 'react-bootstrap';

const Movies = () => {

	const [films, setFilms] = useState();
	const [inFlight, setFlight] = useState(true);
	const [filter, setFilter] = useState("All");
	const [filteredList, setFilteredList] = useState([]);
	const [random, setRandom] = useState([]);

	useEffect(() => {
		MovieData((result) => {
			setFilms(result)
			setFlight(false)
			filterUnique(result)
			filterRandom(result)
		})
	}, [])

	const handleSelection = (event) => {
		setFilter(event.target.value);
	}

	const filterUnique = (result) => {
		let arrayTwo = [];
		arrayTwo.push('All')
		result.forEach(film => {
			if (arrayTwo.indexOf(film.genre) === -1) {
				arrayTwo.push(film.genre)
			}
		})
		setFilteredList(arrayTwo)
	}

	const filterRandom = (result) => {
		setRandom(result[Math.floor((Math.random() * result.length))]);
	}


	const getFilteredList = () => {
		if (filter === "All") {
			return films
		}
		return films.filter(film => film.genre === filter)
	}

	if (inFlight) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<div className="random-box">
				<div>Show me random movie:</div>
				<Movie
					name={random.name}
					poster={random.poster}
					id={random.id}
					release_year={random.date}
					trailer={random.trailer}
					rotten={random.rotten}
					genre={random.genre}
				/>
			</div>
			<hr></hr>
			<div className="selection-box">
				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>Select a movie genre:</Form.Label>
					<Form.Control as="select" onChange={handleSelection} value={filter}>
						{filteredList.map((genre, index) =>
							<option key={index} value={genre}>{genre}</option>
						)}
					</Form.Control>
				</Form.Group>
			</div>
			<hr></hr>
			
			<div className=" " >
				{films ?
					getFilteredList().map((movie, index) => (
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
					: 'Loading'}
			</div >
		</div>
	)
};

export default Movies;