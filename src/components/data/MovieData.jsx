import axios from 'axios';

export const MovieData = (callback) => {
	const url = "http://localhost:8080/api/movies/"
	axios.get(url)
		.then(function (response) {
			callback(response.data)
		})
		.catch(function (error) {
			console.log(error);
		})
}