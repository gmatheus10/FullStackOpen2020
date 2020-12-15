import React, { useState } from "react";
import SingleCountry from "../SingleCountry/SingleCountry.js";
function MultipleCountries(props) {
	const [label, setLabel] = useState("Show");
	const [showDetails, setShowDetails] = useState(false);
	const [country, setCountry] = useState("");
	const handleDetailsChange = (detail) => {
		if (label === "Show") {
			setLabel("Hide");
		} else {
			setLabel("Show");
		}
		setCountry(detail);
		setShowDetails(!showDetails);
	};
	const { countries } = props;
	return (
		<div>
			{showDetails ? (
				<div>
					<button onClick={handleDetailsChange}>{label}</button>
					<SingleCountry country={country} />
				</div>
			) : (
				<ul>
					{countries.map((el) => (
						<div key={el.name}>
							<li>{el.name}</li>
							<button
								onClick={() => {
									handleDetailsChange(el);
								}}>
								{label}
							</button>
						</div>
					))}
				</ul>
			)}
		</div>
	);
}

export default MultipleCountries;
