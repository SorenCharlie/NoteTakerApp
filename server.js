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

// not needed per express day 1 video
// // Route to return the notes.html file
// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'notes.html'));
//   });
  
//   // Route to return the index.html file
//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//   });
  
 

app.listen(PORT, () => console.log("Server is running"));