'use strict';
/*
      Author: Bernice Templeman
      Date: 05/04/2024

      Filename: character-creator.spec.js
*/

const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  let charData = {
    class: 'Mage',
    gender: 'Female',
    funFact: 'Always Eternal',
  };

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  // Test 1: The CharacterCreator processes data correctly when written to.
  test('should process data correctly when written to', (done) => {
    characterCreator.write(JSON.stringify(charData));
    characterCreator.on('data', (data) => {
      const expectedOutput =
      `The character is a ${charData.gender} class ${charData.class} who is ${charData.funFact}`;
      expect(data.toString().trim()).toBe(expectedOutput);
      done();
    });
  });

  // Test 2: The CharacterCreator emits an “error” event when an empty string is written to it.
  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.on('error', (err) => {
      expect(err.message).toBe('Invalid character data');
      done();
    });
    characterCreator.write('');
  });

  // Test 3: The CharacterCreator transforms the data correctly when written to.
  test('should transform data correctly when written to', (done) => {
    const expectedOutput =
      `The character is a ${charData.gender} class ${charData.class} who is ${charData.funFact}`;
    characterCreator.write(JSON.stringify(charData), 'utf8', () => {
      characterCreator.on('data', (data) => {
        expect(data.toString().trim()).toBe(expectedOutput);
        done();
      });
    });
  });
});