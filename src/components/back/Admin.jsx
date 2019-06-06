import React, { useState } from "react";
import '../Movie.css';
import axios from 'axios';

const Admin = ({ name, poster, id, release_year, trailer, rotten, genre }) => {

	const [nume, setNume] = useState(name);
	const [pooster, setPooster] = useState(poster);
	const [trailler, setTrailler] = useState(trailer);
	const [rooten, setRooten] = useState(rotten);
	const [annee, setAnnee] = useState(release_year);
	const [type, setType] = useState(genre);
	const [modif, setModif] = useState(false);

	const handleChange = (index) => {
		setModif(true)
	};

	const modifyForm = (e) => {
		e.preventDefault();
		axios.put(`http://localhost:8080/api/movies/${id}`, {
			name: nume === '' ? name : nume,
			poster: pooster === '' ? poster : pooster,
			trailer: trailler === '' ? trailer : trailler,
			rotten: rooten === '' ? rotten : rooten,
			date: annee === '' ? release_year : annee,
			genre: type === '' ? genre : type
		})
			.then((response) => {
				console.log(response);
				alert(`Movie with the #${response.data.id} ID was modified in your database!`);
			})
			.catch((error) => {
				console.log(error);
				alert(`${error}`)
			})
	}

	const deleteForm = (e) => {
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
		<tbody>
			<tr key={id}>
				<td>
					<div>{id}</div>
				</td>
				<td>
					{modif ? <input
						type="text"
						id="name"
						name="name"
						onChange={(event) => setNume(event.target.value)}
						value={nume}
						placeholder={name} /> : <div> {name} </div>}
				</td>
				<td>
					{modif ? <input
						type="text"
						id="trailer"
						name="trailer"
						onChange={(event) => setTrailler(event.target.value)}
						value={trailler}
						placeholder={trailer} /> : <div>{trailer}</div>}
				</td>
				<td>
					{modif ?
						<input
							type="text"
							id="poster"
							name="poster"
							onChange={(event) => setPooster(event.target.value)}
							value={pooster}
							placeholder={poster}
						/> : <div>{poster}</div>}
				</td>
				<td>
					{modif ? <input
						type="text"
						id="rotten"
						name="rotten"
						onChange={(event) => setRooten(event.target.value)}
						value={rooten}
						placeholder={rotten}
					/> : <div>{rotten}</div>}
				</td>
				<td>
					{modif ? <input
						type="text"
						id="year"
						name="year"
						onChange={(event) => setAnnee(event.target.value)}
						value={annee}
						placeholder={release_year}
					/> : <div>{release_year}</div>}
				</td>
				<td>
					{modif ? <input
						type="text"
						id="genre"
						name="genre"
						onChange={(event) => setType(event.target.value)}
						value={type}
						placeholder={genre}
					/> : <div>{genre}</div>}
				</td>

				<td className="action_button">
					<button onClick={modif ? modifyForm : () => handleChange(id)}>{modif ? 'send' : 'modif'}</button>
					<button onClick={deleteForm}>delete</button>
				</td>
			</tr>

		</tbody>

	)
};

export default Admin;