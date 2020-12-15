import React, { useState, useEffect } from "react";
import Contacts from "./Components/Contacts/Contacts";
import Form from "./Components/Form/Form";
import http from "./services/http.js";
const App = () => {
	const [persons, setPersons] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await http.getPersons();
			setPersons(res);
		})();
	}, []);

	const [newNumber, setNewNumber] = useState("");
	const [newName, setNewName] = useState("");
	const [filter, setFilter] = useState(persons);
	////////////////////////////////////////////////////////
	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};
	////////////////////////////////////////////////////////
	useEffect(() => {
		setFilter(persons);
	}, [persons]);
	////////////////////////////////////////////////////////
	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};
	////////////////////////////////////////////////////////

	const handleNameSubmit = (event) => {
		event.preventDefault();
		const newPerson = {
			name: newName,
			number: newNumber,
		};
		let isDuplicate = false;

		persons.forEach((el) => {
			if (el.name === newName || el.number === newNumber) {
				return (isDuplicate = true);
			}
		});
		if (isDuplicate) {
			window.alert(`${newName} or ${newNumber} is already on the list`);
		} else {
			const newPersons = [...persons, newPerson];
			setPersons(newPersons);
		}
		setNewName("");
		setNewNumber("");
	};

	////////////////////////////////////////////////////////
	const handleFilter = (event) => {
		const filtered = persons.filter((el) =>
			el.name.toLowerCase().includes(event.target.value.toLowerCase())
		);
		setFilter(filtered);
	};
	////////////////////////////////////////////////////////
	return (
		<div>
			<h2>Phonebook</h2>
			Filter: <input onInput={handleFilter} />
			<h2>Add a new</h2>
			<Form
				newName={newName}
				newNumber={newNumber}
				contactSubmit={handleNameSubmit}
				nameChange={handleNameChange}
				numberChange={handleNumberChange}
			/>
			<h2>Numbers</h2>
			<Contacts list={filter} />
		</div>
	);
};

export default App;
