let persons = require("../data/db.json");

const showAll = async (req, res) => {
	try {
		res.send(persons);
	} catch (error) {
		console.log(error.message);
	}
};
const showOne = async (req, res) => {
	const id = Number(req.params.id);
	try {
		if (!persons[id - 1]) {
			return res.status(404).send("Couldn't find entry");
		}
		res.send(persons[id - 1]);
	} catch (error) {
		console.log(error.message);
	}
};
const info = (req, res) => {
	res.send(`Phonebook has info for ${persons.length} people`);
};

const deleteOne = async (req, res) => {
	const id = Number(req.params.id);
	try {
		if (!persons[id - 1]) {
			return res.status(404).send("Couldn't find entry");
		}
		persons = persons.filter((el) => {
			return el.id !== id;
		});
		res.status(200).send(`Deleted ${id}`);
	} catch (error) {
		console.log(error);
	}
};
const generateID = (ref) => {
	return ref.length + 1;
};
const add = async (req, res) => {
	let newPerson = req.body;
	try {
		if (!newPerson.name || !newPerson.number) {
			throw new Error("Missing name or number");
		}
		persons.forEach((el) => {
			if (el.name === newPerson.name || el.number === newPerson.number) {
				throw new Error(`Entry already on phonebook`);
			}
		});
		newPerson.id = generateID(persons);
		persons.push(newPerson);
		res.send(newPerson);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
module.exports = { showAll, showOne, info, deleteOne, add };
