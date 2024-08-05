const express = require("express");
const app = express();
require('dotenv').config()

app.get("/", (req, res) => res.send("testing"));

const port = process.env.PORT;
app.listen(port, () => console.log(`app listening on port ${port}!`));
