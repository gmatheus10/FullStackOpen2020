import React, { useState, useEffect } from "react";
import http from "../../services/http.js";
function Contacts(props) {
	const [list, setList] = useState(props.list);
	useEffect(() => {
		props.onChange(list);
	}, [list]);
	useEffect(() => {
		setList(props.list);
	}, [props.list]);

	const deleting = (person) => {
		const newList = list.filter((el) => {
			return el.id !== person;
		});
		setList(newList);
	};
	const handleDelete = async (person) => {
		try {
			if (window.confirm(`Delete ${person}?`)) {
				deleting(person);
				const res = await http.deletePerson(person);
			}
		} catch (error) {
			props.onError(`${person} already removed from server`);
			setTimeout(() => {
				props.onError(null);
			}, 5000);
			deleting(person);
		}
	};
	return (
		<div>
			<ul>
				{list.map((el) => (
					<div key={el.name}>
						<li>
							{el.name} - {el.number}
						</li>
						<button
							onClick={() => {
								handleDelete(el.id);
							}}>
							Delete
						</button>
					</div>
				))}
			</ul>
		</div>
	);
}

export default Contacts;
