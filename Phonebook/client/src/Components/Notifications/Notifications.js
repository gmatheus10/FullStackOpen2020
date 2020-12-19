import React from "react";

function Notifications({ message }) {
	return message === null ? null : (
		<div>
			<span>{message}</span>
		</div>
	);
}

export default Notifications;
