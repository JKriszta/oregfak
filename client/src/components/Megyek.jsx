
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Megye } from './Megye';
import { Result } from './Result';

export const Megyek = () => {
	const [megyek, setMegyek] = useState([]);


	useEffect(() => {
		fetchMegyek();
	}, []);

	const fetchMegyek = async () => {
		try {
			const resp = await axios.get(`http://localhost:5000/megyek/`);
			setMegyek(resp.data);
		}
		catch (err) {
			console.log(err);
		}
	}

	const [choosenCounty, setChoosenCounty] = useState("");

	const choosenCountyValue = (e) => {
		const value = e.target.value
		console.log("choosenCounty", value);
		setChoosenCounty(value);
	}

	//console.log(megyek);
	//console.log(choosenCounty);
	return (
		<div className="container text-center">
			<h1>Megyénként nyilvántartott öreg fák</h1>

			<div className="col-lg-3 center-block">


				<select id="megye" name="megyek" className="text-center" value={choosenCounty} onChange={choosenCountyValue}>
					<option value="">Válassz megyét</option>
					{megyek.map((obj, id) =>
						<Megye key={obj.id} {...obj} />
					)}
				</select>
				<Result choosenCounty={choosenCounty} />
			</div>
		</div>
	)
}