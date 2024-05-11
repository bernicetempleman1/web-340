'use strict';

const { get } = require('https');

/*
  Pragmatic Node.js
  Chapter 8
  Programming Assignment

  Author: Bernice Templeman
  Date: 05/09/2024
  Filename: character-creation.spec.js
*/

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the code to test callbacks
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the code to test promises
 *
 */

// For callbacks:
/* Uncomment the code to test callbacks
const fs = require('fs');
describe('Character Creation Module', () => {
  let createCharacter;
  let getCharacters;

  let charData = {
    class: 'Mage',
    gender: 'Female',
    funFact: 'Always Eternal',
  };
  let charDataString = JSON.stringify(charData);

  beforeEach(() => {
    jest.resetModules();
    jest
      .spyOn(fs, 'readFile')
      .mockImplementation((file, options, callback) =>
        callback(
          null,
          charDataString + '\n' + charDataString + '\n' + charDataString + '\n'
        )
      );
    jest
      .spyOn(fs, 'writeFile')
      .mockImplementation((file, data, callback) => callback(null));
    ({ getCharacters, createCharacter } = require('../src/character-creation'));
  });

  //Test that data can be written to a file.
  test('writes data to a file', (done) => {
    let newChar = JSON.stringify(charData);
    createCharacter(newChar, (err) => {
      expect(err).toBeNull();
      done();
    });
  });

  //Test that data can be read from a file
  test('reads data from a file', (done) => {
    getCharacters((err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual([charDataString, charDataString, charDataString]);
      done();
    });
  });

  //Test that it handles errors when reading from the file
  test('handles errors when reading from the file', (done) => {
    fs.readFile.mockImplementationOnce((file, options, callback) =>
      callback(new Error('File not found'))
    );
    getCharacters((err) => {
      expect(err).not.toBeNull();
      expect(err.message).toBe('File not found');
      done();
    });
  });
});

//End Uncomment for callbacks */


// For promises:
/* Uncomment code to test promises

const fs = require('fs').promises;

describe('Character Creation', () => {
  let getCharacters;
  let createCharacter;

  let charData = {
    class: 'Mage',
    gender: 'Female',
    funFact: 'Always Eternal',
  };

  let charDataString = JSON.stringify(charData);
  beforeEach(() => {
    jest.resetModules();
    jest
      .spyOn(fs, 'readFile')
      .mockImplementation(() =>
        Promise.resolve(
          charDataString + '\n' + charDataString + '\n' + charDataString + '\n'
        )
      );
    jest.spyOn(fs, 'writeFile').mockImplementation(() => Promise.resolve());
    ({ getCharacters, createCharacter } = require('../src/character-creation'));
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  test('reads characters from a file', async () => {
    const characters = await getCharacters();
    expect(characters).toEqual([
      charDataString,
      charDataString,
      charDataString,
    ]);
  });

  // 2. Test that getCharacters reads characters from the file
  test('writes character to a file', async () => {
    let newChar = JSON.stringify(charData);
    console.log(newChar);
    await expect(createCharacter([newChar])).resolves.toBeUndefined();
  });

  // 3. Test that createCharacter handles errors when writing to the file
  test('handles errors when reading characters', async () => {
    fs.readFile.mockImplementationOnce(() =>
      Promise.reject(new Error('File not found'))
    );
    await expect(getCharacters()).rejects.toThrow('File not found');
  });
});

 // End Uncomment for promises*/

