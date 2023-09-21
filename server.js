// DEPENDENCIES
const express = require("express");

// DATA

// APP/PORT
const app = express();
const PORT = process.env.PORT || 4000;

// MIDDLEWARES

// ROUTES

// START THE SERVER
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
