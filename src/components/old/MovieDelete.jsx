import React, { useState } from 'react';
import '../Movie.css';
import axios from 'axios';

const MovieDelete = () => {

	const [id, setId] = useState('');

	const submitForm = (e) => {
		e.preventDefault();
		axios.delete(`http://localhost:8080/api/movies/${id}`, {

		})
			.then((response) => {
				console.log(response);
				alert(`Movie with the #${response.data.id} ID deleted from your database!`);
			})
			.catch((error) => {
				console.log(error);
				alert(`${error}`)
			})
	}

	return (
		<div className="general">
			<div className="FormMovie">
				<h1 >Delete a movie</h1>
				<form onSubmit={submitForm}>
					<fieldset>
						<legend>Movie info to submit</legend>
						<div className="form-data">
							<label htmlFor="name">Movie id</label>
							<input
								type="text"
								id="id"
								name="id"
								onChange={(event) => setId(event.target.value)}
								value={id}
								placeholder="id of the movie"
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

export default MovieDelete;