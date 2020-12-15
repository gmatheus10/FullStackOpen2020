import React, { useState, useEffect } from "react";
import http from "./services/http.js";
import SingleCountry from "./Components/SingleCountry/SingleCountry.js";
import MultipleCountries from "./Components/MultipleCountries/MultipleCountries.js";

function App() {
	const [countries, setCountries] = useState([]);
	const [filterCountry, setFilterCountry] = useState([]);
	useEffect(() => {
		(async () => {
			const all = (await http.getCountries()).map(
				({ name, capital, flag, population, languages, region }) => {
					return { name, capital, flag, population, languages, region };
				}
			);
			setCountries(all);
		})();
	}, []);

	const handleFilterCountries = (event) => {
		const filter = countries.filter((el) =>
			el.name.toLowerCase().includes(event.target.value)
		);
		setFilterCountry(filter);
	};
	const handleDetails = (show) => {
		console.log(show);
	};
	return (
		<div className='App'>
			<h2>Countries</h2>
			<div>
				<span>Find Countries: </span>
				<input onInput={handleFilterCountries} />
			</div>
			<div>
				{filterCountry.length === 1 ? (
					<SingleCountry country={filterCountry[0]} />
				) : (
					<div>
						{filterCountry.length > 10 ? (
							<span>Too many results, add more description</span>
						) : (
							<MultipleCountries countries={filterCountry} />
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
