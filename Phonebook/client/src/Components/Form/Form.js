import React from "react";

function Form(props) {
	const { newName, newNumber } = props;
	const changeName = (event) => {
		props.nameChange(event);
	};
	const changeNumber = (event) => {
		props.numberChange(event);
	};
	const submitContact = (event) => {
		props.contactSubmit(event);
	};
	return (
		<form onSubmit={submitContact}>
			<div>
				Name: <input value={newName} onInput={changeName} required />
			</div>
			<div>
				Number:
				<input value={newNumber} onInput={changeNumber} required />
			</div>
			<div>
				<button type='submit'>add</button>
			</div>
		</form>
	);
}

export default Form;
