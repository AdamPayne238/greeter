require('dotenv').config();

const express = require('express');

const server = express(); // creating an instance of an express server....

console.log('message:', process.env.MSG);

server.get('/', (req, res) => {
  res.send(process.env.MSG);
  res.status(200).json({hello: 'Web 23' });
});

// The port is coming from the environment 
const port = process.env.PORT || 2000;

console.log("port", port);

server.listen(port, () => {
  console.log(` Server running on port ${port} `);
});
