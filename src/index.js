const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const routes = require("./routes");

app.use(routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
