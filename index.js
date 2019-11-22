const express = require('express')
const app = express();
const port = process.env.PORT || 8080;
const name = process.env.NAME || "World";

app.get('/', (req, res) => {
	res.json({message: `Hello ${name}`});
});

const server = app.listen(port, () => {
	console.log(`Server is listening on ${port}`);
      });

module.exports = server;
