import axios from "axios";
const baseURL = "http://localhost:3001";
const getPersons = async () => {
	const res = await axios.get(`${baseURL}/persons`);
	return res.data;
};

export default { getPersons };
