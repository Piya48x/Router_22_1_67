const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const errorHandler = require("./middlewares/error");
const notFoundHandler = require("./middlewares/notFound");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(errorHandler);
app.use("*", notFoundHandler)

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
