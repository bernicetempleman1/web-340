/*
  Pragmatic Node.js
  Chapter 9
  Programming Assignment

  Author: Bernice Templeman
  Date: 05/16/2024
  Filename: game-characters.spec.js
*/

'use strict';

const { GameCharacters } = require('../src/game-characters');

describe('GameCharacters', () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  // Test that data is being returned from the game-characters-data script.
  test('should return game characters data', (done) => {
    // TODO: Implement this test
    gameCharacters.getCharacters((data, error) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        {
          Class: 'Mage',
          Gender: 'Female',
          Fact: 'Eternal',
        },
        {
          Class: 'Mage',
          Gender: 'Female',
          Fact: 'Eternal Again',
        },
      ]);
      done();
    });
  });

  // Test that it handles an error when the game-characters-data script is not found.
  test('should handle an error when the game characters data script is not found', (done) => {
    // TODO: Implement this test
    const gameCharacters = new GameCharacters("nonexistent-script.js");
    gameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  // Test that it handles an error when the game-characters-data script fails.
  test('should handle an error when the game characters data script fails', (done) => {
    // TODO: Implement this test
    const gameCharacters = new GameCharacters('./src/failing-script.js');
    gameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});
