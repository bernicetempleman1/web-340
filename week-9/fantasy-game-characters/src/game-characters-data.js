/*
  Pragmatic Node.js
  Chapter 9
  Programming Assignment

  Author: Bernice Templeman
  Date: 05/16/2024
  Filename: game-characters-data.js

  Description: Characters should have the following properties:
  a. Class (Warrior, Mage, Rogue)
  b. Gender (Male, Female, Other)
  c. An additional property for something neat and fun about your character.
*/

'use strict';
// TODO: Implement this script

const gameCharacters = [
  { Class: 'Mage', Gender: 'Female', Fact: 'Eternal' },
  { Class: 'Mage', Gender: 'Female', Fact: 'Eternal Again' },
];
console.log(JSON.stringify(gameCharacters));
