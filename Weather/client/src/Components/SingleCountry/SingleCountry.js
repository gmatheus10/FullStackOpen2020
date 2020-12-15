import React, { useState, useEffect } from "react";
import http from "../../services/http.js";
function SingleCountry(props) {
	const { country } = props;
	const [weather, setWeather] = useState({});
	useEffect(() => {
		(async () => {
			const data = await http.getWeather(country.capital);
			setWeather({
				weather: data.weather,
				temperature: data.main.temp,
				tempSense: data.main.feels_like,
				windSpeed: data.wind.speed,
			});
		})();
	}, [country]);
	return (
		<div>
			<h2>{country.name}</h2>
			<img src={country.flag} alt={country.name} width='50' height='50' />
			<div>
				<span>Capital: {country.capital}</span>
				<br />
				<span>Population: {country.population}</span>
			</div>
			<div>
				<h2>Languages</h2>
				<ul>
					{country.languages.map((el) => (
						<li key={el.name}>{el.name}</li>
					))}
				</ul>
			</div>
			<span>Region : {country.region}</span>
			<div>
				<h2>Weather in {country.capital}</h2>
				<div>
					<span>Temperature: {weather.temperature}º Celsius</span>
					<br />
					<span>Thermic sensation: {weather.tempSense}º Celsius</span>
					<br />
					<span>Wind: {weather.windSpeed} m/s</span>
				</div>
			</div>
		</div>
	);
}

export default SingleCountry;
