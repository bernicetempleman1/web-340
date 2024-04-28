/**
 * Author: Bernice Templeman
 * Date: 04/27/2024
 * File Name: server.js
 * Description: Character creation
 */
'use strict';

const http = require('http');
const url = require('url');

// character
let character = {
  class: '',
  gender: '',
  funFact: '',
};

const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true); // Parse the URL and the query
  const pathName = parsedURL.pathname; // Get the path
  const query = parsedURL.query; // Get the query parameters as an object

  if (pathName === '/create' && req.method === 'POST') {
    // You can now access query parameters with query.parameterName
    character.class = query.class;
    character.gender = query.gender;
    character.funFact = query.funFact;
    res.writeHead(201);
    res.end('Character created.');
  } else if (pathName === '/confirm' && req.method === 'POST') {
    res.writeHead(200);
    res.end('Character creation has been confirmed.');
  } else if (pathName === '/view' && req.method === 'GET') {
    res.writeHead(200);
    res.end(
      `Character: ${character.class} ${character.gender} ${character.funFact}`
    );
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;
