import React, { createContext, useState, useEffect, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MovieSelect from './MovieSelect';
import imageSelect from '../old/ezgif.com-gif-maker.gif'
import './FullFrontStyle.css';
import { Row, Form } from 'react-bootstrap';
import { Context } from '../../App';


export const ContextB = createContext();

const FullFront = () => {

	const [movies] = useContext(Context);
	const [random, setRandom] = useState(false);
	const [select, setSelect] = useState(false);
	const [filter, setFilter] = useState('make your pick');
	const [filteredList, setFilteredList] = useState([]);

	const methodRandom = () => {
		setRandom(true);
	};

	const methodSelect = () => {
		setSelect(true);
	};

	useEffect(() => {
		filterUnique(movies);
	});

	const filterUnique = (result) => {
		let arrayTwo = [];
		arrayTwo.push('make your pick')
		result.forEach(film => {
			if (arrayTwo.indexOf(film.genre) === -1) {
				arrayTwo.push(film.genre)
			}
		})
		setFilteredList(arrayTwo)
	};

	const handleSelection = (event) => {
		setFilter(event.target.value);
	};

	const getFilteredList = () => {
		if (filter === "make your pick") {
			return movies;
		} else {
			return movies.filter(film => film.genre === filter);
		}
	};

	const multipleAction = (event) => {
		methodSelect();
		handleSelection(event);
	};

	if (random) {
		return (
			<Redirect to='/random' />
		)
	} else if (select) {
		return (
			// <ContextB.Provider value={getFilteredList()} >
			// 	<Redirect to='/selected' />
			// </ContextB.Provider>
			<MovieSelect movies={getFilteredList()} />
		)
	}

	return (
		<div className='container-fluid'>
			<Row >
				<div className='centeredParent'>
					<p className='centeredChild'>or</p>
				</div>
				<div className='col-xs-12 col-sm-6 col-m-6 col-lg-6 left'>
					<button onClick={methodRandom} className="centeredRandom">
						<img className='mt-3' src="https://i.gifer.com/2INg.gif" alt="Avatar woman" />
						<h3 className='mt-2 selectRandom'>random movie</h3>
						<p><small className='takeChance'>take your chance</small></p>
						<div className="selection-box">
						</div>
					</button>
				</div>
				<div className='col-xs-12 col-sm-6 col-m-6 col-lg-6 right'>
					<div className="centeredSelect">
						<img className='mt-3' src={imageSelect} loop="infinite" alt="Avatar man" />
						<h3 className='mt-2 selectGenre'>select a genre</h3>
						<Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Control as="select" onChange={multipleAction} value={filter}>
								{filteredList.map((genre, index) =>
									<option key={index} value={genre}>{genre}</option>
								)}
							</Form.Control>
						</Form.Group>
					</div>
				</div>
			</Row>
		</div>
	)
};

export default FullFront;