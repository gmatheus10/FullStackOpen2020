import axios from "axios";

const countriesBaseURL = "https://restcountries.eu/rest/v2";
const weatherBaseURL = "http://api.openweathermap.org/data/2.5/weather?q=";
const weatherAPI_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const weatherMetric = "&units=metric";

const getCountries = async () => {
	const res = await axios.get(`${countriesBaseURL}/all`);

	return res.data;
};

const getWeather = async (city) => {
	const res = await axios.get(
		`${weatherBaseURL}${city}&appid=${weatherAPI_KEY}${weatherMetric}`
	);
	return res.data;
};
export default { getCountries, getWeather };
