import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Result = ({ choosenCounty }) => {


	console.log(choosenCounty)

	const [trees, setTrees] = useState([])
	const [show, setShow] = useState(false);



	useEffect(() => {

		if (choosenCounty) {
			fetchTrees(choosenCounty);
		}
	}, [choosenCounty]);


	const fetchTrees = async (choosenCounty) => {
		let url = `http://localhost:5000/megyek/${choosenCounty}`;
		try {
			const resp = await axios.get(url)
			console.log(resp.data);
			setTrees(resp.data);
			setShow(true);
		} catch (err) {
			console.log(err);
		}
	}


	return (

		<div className="" >


			{/*
			{show && trees.map((obj, id) =>
				<li key={obj.id}>{obj.id} {obj.faj}{obj.kormeret} {obj.telepules}</li>
			)
			} */}


			{show && <table className="table mt-5 text-center">
				<thead className="bg-dark text-light">
					<tr>
						<th scope="col">id</th>
						<th scope="col">Faj</th>
						<th scope="col">Körméret</th>
						<th scope="col">Település</th>
					</tr>
				</thead>
				<tbody>
					{show && trees.map((obj, id) =>
						<tr>
							<th key={obj.id} scope="row">{obj.id}</th>
							<td>{obj.faj}</td>
							<td>{obj.kormeret}</td>
							<td>{obj.telepules}</td>
						</tr>
					)
					}
				</tbody>
			</table >
			}
		</div >
	)
}