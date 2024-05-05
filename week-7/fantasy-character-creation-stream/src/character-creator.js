'use strict';
/*
  Author: Bernice Templeman
  Date: 05/04/2024

  Filename: character-creator.js

  create a CharacterCreator class that extends the
  Duplex stream class from Node.js’s built-in stream module.
  The class should process character creation data and output a formatted description.

  The CharacterCreator class should take data about the character’s class (Warrior,
  Mage, Route), gender (Male, Female, Other), and a fun fact about the character.
    • Use the push method in your Duplex stream to output data.
    • Remember to call callback in your _write method.
    • Use the done function in your Jest tests to handle asynchronous code.
    • Refer to the MoviesStream provided in this chapter for guidance.

*/
const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.character = [];
  }

  _write(chunk, encoding, callback) {
    const charData = chunk.toString();
    if (!charData) {
      callback(new Error('Invalid character data'));
      return;
    }
    this.character= JSON.parse(charData);
    callback();
  }

  _read(size) {
    this.push(
      `The character is a ${this.character.gender} class ${this.character.class} who is ${this.character.funFact}`
    );
    this.push(null);
  }
}

module.exports = CharacterCreator;