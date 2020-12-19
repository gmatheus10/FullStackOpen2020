const express = require("express");
const route = require("./routes/routes");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(express.static("build"));
app.get("/", (req, res) => {
	res.send(`<div>
	<h2>Welcome!</h2>
	<br />
	<div>
		<h3>Endpoints:</h3>
		<span>GET: /persons</span>
	</div>
</div>`);
});
app.use(cors());
app.use("/persons", route);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
