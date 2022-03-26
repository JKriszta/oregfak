import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Fa } from './Fa';

export const Stats = () => {

	const [fak, setFak] = useState([]);

	useEffect(() => {
		fetchFak();
	}, []);

	const fetchFak = async () => {
		try {
			const resp = await axios.get('http://localhost:5000/stats');
			setFak(resp.data);
		}
		catch (err) {
			console.log(err);
		}
	}
	console.log(fak);
	return (

		<div className="container">
			<h1 className="text-center">Faj szerinti statisztika</h1>
			<table className="table">
				<thead>
				</thead>
				<tbody>
					{fak.map((obj, index) =>
						<tr>
							<th key={obj.id} sequencenumber={index} data={obj} scope="row"></th>
							<td>{index + 1}</td>
							<td>{obj.faj}</td>
							<td>{obj.darab}</td>
						</tr>
					)}
				</tbody>
			</table>




			{/* <ol>
				{fak.map((obj, id) =>
					<Fa key={obj.id} {...obj} />
				)}
			</ol> */}

		</div>
	)
}