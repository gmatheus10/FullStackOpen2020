import axios from "axios";
const baseURL = "https://project-phonebook.herokuapp.com";
const getPersons = async () => {
	const res = await axios.get(`${baseURL}/persons`);
	return res.data;
};
const postPerson = async (person) => {
	const res = await axios.post(`${baseURL}/persons`, person);
	return res;
};
const deletePerson = async (id) => {
	const res = await axios.delete(`${baseURL}/persons/${id}`);
	return res.status;
};
const putPerson = async (id, data) => {
	const res = await axios.put(`${baseURL}/persons/${id}`, data);
	return res;
};
export default { getPersons, postPerson, deletePerson, putPerson };
