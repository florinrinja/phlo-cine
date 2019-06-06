import React, { useContext } from 'react';
import Admins from './back/Admins';
import { Context } from '../App';

const CoteAdmin = () => {
	const [movies] = useContext(Context);
	return (
		<div>
			<Admins movies={movies} />
		</div>
	)
}
export default CoteAdmin;