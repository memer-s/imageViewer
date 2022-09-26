const express = require("express")
const fs = require("fs/promises")
const app = express();

const PORT = 4000;

app.get("/", async (req, res) => {
	let dir = await fs.readdir(__dirname+'/public/images/');
	let imgString = "";
	for(let i = 0; i < dir.length; i++) {
		imgString += `	<div><img src="images/${dir[i]}" /><p>${dir[i]}</p></div>`;
	}
	res.send(`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Images</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<main>
	${imgString}
	</main>
</body>
</html>`)
});

app.use(express.static("public"));

// console.log(__dirname)

app.listen(PORT, () => {console.log("The server is up and running on port", PORT)});