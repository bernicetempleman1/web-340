'use strict';

/*
  Pragmatic Node.js
  Chapter 8
  Programming Assignment

  Author: Bernice Templeman
  Date: 05/09/2024
  Filename: character-creation.js

  Description: Create a character
  a. Class (Warrior, Mage, Rogue)
  b. Gender (Male, Female, Other)
  c. An additional property for something neat and fun about your character.

 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:
/* Uncomment
const fs = require('fs');

const { readFile, writeFile } = require('fs');
const { join } = require('path');
const CHARACTER_FILE = join(__dirname, 'characters.txt'); // __dirname is the directory of the current file

//write data to a file
function createCharacter(character, callback) {
  console.log(typeof(character));
  const data = character +"\n";
  writeFile(CHARACTER_FILE, data, (err) => {
    callback(err);
  });
}

// read data from a file
function getCharacters(callback) {
  readFile(CHARACTER_FILE, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      callback(err);
    } else {
      const characters = data.split('\n').filter((character) => character);
      callback(null, characters); // null is the first argument because there is no error
    }
  });
}
// end callbacks*/

// For promises:
/* Uncomment
const fs = require('fs').promises;

const { readFile, writeFile } = require('fs').promises;
const { join } = require('path');
const CHARACTER_FILE = join(__dirname, 'characters.txt'); // __dirname is the directory of the current file

async function createCharacter(character) {
  try {
    const data = character.join('\n');
    await writeFile(CHARACTER_FILE, data);
  } catch (err) {
    throw err;
  }
}

async function getCharacters() {
  try {
    const data = await readFile(CHARACTER_FILE, 'utf8');
    const characters = data.split('\n').filter((character) =>character);
    return characters;
  } catch (err) {
    throw err;
  }
}
//*/

// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacter, getCharacters }; // For callbacks
// module.exports = { createCharacter, getCharacters }; // For promises
