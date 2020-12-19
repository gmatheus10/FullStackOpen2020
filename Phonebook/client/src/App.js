import React, { useState, useEffect } from "react";
import Contacts from "./Components/Contacts/Contacts";
import Form from "./Components/Form/Form";
import http from "./services/http.js";
import Notifications from "./Components/Notifications/Notifications.js";
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
	const [error, setError] = useState(null);
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
			id: persons.length + 1,
		};
		let isDuplicate = false;

		persons.forEach((el) => {
			if (el.name === newName || el.number === newNumber) {
				return (isDuplicate = true);
			}
		});
		if (isDuplicate) {
			const replace = window.confirm(
				`${newName} is already on the list, do you wish to replace number?`
			);
			if (replace) {
				const change = [...persons];
				const index = persons.findIndex((el) => {
					return el.name === newName;
				});
				change[index] = newPerson;
				setPersons(change);

				http.putPerson(newName, newPerson);
			}
		} else {
			const newPersons = [...persons, newPerson];
			setPersons(newPersons);
			http.postPerson(newPerson);
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
	const handleDataChange = (data) => {
		setPersons(data);
	};
	const handleHttpError = (error) => {
		setError(error);
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
			<hr />
			<Notifications message={error} />
			<h2>Numbers</h2>
			<Contacts
				list={filter}
				onChange={handleDataChange}
				onError={handleHttpError}
			/>
		</div>
	);
};

export default App;
