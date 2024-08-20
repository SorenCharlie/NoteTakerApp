const express = require("express");
const fs = require('fs');
const routes = require('./routes');
const uuid = require('uuid'); // npm package to generate unique IDs
const { resourceLimits } = require("worker_threads");

const app = express();

const PORT = 3001;

// Middleware to parse JSON body in POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static("public"));
app.use(routes);


app.listen(PORT, () => console.log("Server is running"));