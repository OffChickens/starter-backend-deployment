require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./contacts/contacts.router");
const cors = require("cors");

console.log("Database_URL", process.env.PRODUCTION_DATABASE_URL);

app.use(cors());
app.use(express.json());
app.use("/contacts", router);

// Not found handler
app.use((request, _response, next) => {
  next({ status: 404, message: `Not found: ${request.originalUrl}` });
});

// Error handler
app.use((error, _request, response, _next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  response.status(status).json({ errors: [message] });
});

const { PORT = 5000 } = process.env;
const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);

module.exports = app;
