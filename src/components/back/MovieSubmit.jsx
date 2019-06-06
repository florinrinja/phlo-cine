import React, { useState } from 'react';
import '../Movie.css';
import axios from 'axios';

const MovieSubmit = () => {

	const [name, setName] = useState('');
	const [poster, setPoster] = useState('');
	const [trailer, setTrailer] = useState('');
	const [rotten, setRotten] = useState('');
	const [release_year, setRelease] = useState('');
	const [genre, setGenre] = useState('');

	const submitForm = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8080/api/movies/', {
			name: name,
			poster: poster,
			trailer: trailer,
			rotten: rotten,
			date: release_year,
			genre: genre
		})
			.then((response) => {
				console.log(response);
				alert(`Movie added to your database with the #${response.data.id} ID!`);
			})
			.catch((error) => {
				console.log(error);
				alert(`${error}`)
			})
	}

	return (
		<div className="general">

			<div className="FormMovie">
				<h1 >Submit a movie</h1>

				<form onSubmit={submitForm}>
					<fieldset>
						<legend>Movie info to submit</legend>
						<div className="form-data">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								onChange={(event) => setName(event.target.value)}
								value={name}
								placeholder="name of the movie"
							/>
						</div>
						<div className="form-data">
							<label htmlFor="release_year">Date</label>
							<input
								type="text"
								id="release_year"
								name="release_year"
								onChange={(event) => setRelease(event.target.value)}
								value={release_year}
								placeholder="release year"
							/>
						</div>

						<div className="form-data">
							<label htmlFor="genre">Genre</label>
							<input
								type="text"
								id="genre"
								name="genre"
								onChange={(event) => setGenre(event.target.value)}
								value={genre}
								placeholder="genre"
							/>
						</div>

						<div className="form-data">
							<label htmlFor="poster">Poster</label>
							<input
								type="text"
								id="poster"
								name="poster"
								onChange={(event) => setPoster(event.target.value)}
								value={poster}
								placeholder="link to poster"
							/>
						</div>
						<div className="form-data">
							<label htmlFor="trailer">Trailer</label>
							<input
								type="text"
								id="trailer"
								name="trailer"
								onChange={(event) => setTrailer(event.target.value)}
								value={trailer}
								placeholder="link to trailer"
							/>
						</div>
						<div className="form-data">
							<label htmlFor="rotten">Rotten</label>
							<input
								type="text"
								id="rotten"
								name="rotten"
								onChange={(event) => setRotten(event.target.value)}
								value={rotten}
								placeholder="link to rottentomatoes"
							/>
						</div>
						<hr />
						<div className="form-data">
							<input type="submit" value="Send" />
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	);
}

export default MovieSubmit;