import React from "react";

function Contacts(props) {
	return (
		<div>
			<ul>
				{props.list.map((el) => (
					<li key={el.name}>
						{el.name} - {el.number}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Contacts;
