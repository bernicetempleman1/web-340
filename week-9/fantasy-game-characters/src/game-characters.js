/*
  Pragmatic Node.js
  Chapter 9
  Programming Assignment

  Author: Bernice Templeman
  Date: 05/16/2024
  Filename: game-characters.js


  Description:
  GameCharacters class that retrieves and
  processes data from a separate JavaScript file using Node.js child processes.
  This class will have a getCharacters method that spawns a child process to run a script,
  captures the data it sends back, and passes this data to a callback function.

  Define the GameCharacters class with a constructor that accepts a script file name.
  The constructor should use the join function from the path module
  to create the path to the script file and store the path in an instance variable.

*/

'use strict';
// game-characters.js
const { spawn } = require('child_process');
const { join } = require('path');
const dataFile = join(__dirname, 'game-characters-data.js');

class GameCharacters {
  constructor(scriptPath = dataFile) {
    this.scriptPath = scriptPath;
  }

  getCharacters(callback) {
    // TODO: Implement this method
    const child = spawn('node', [this.scriptPath]);
    child.stdout.on('data', (data) => {
      const gameCharactersData = JSON.parse(data.toString());
      callback(gameCharactersData, null);
    });

    child.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
      callback(null, new Error(data.toString()));
    });

    child.on('error', (error) => {
      console.error(`spawn error: ${error}`);
      callback(null, error);
    });
  }
}

module.exports = { GameCharacters };
