/**
 * Author: Bernice Templeman
 * Date: 04/21/2024
 * File Name: pie.spec.js
 * Description: unit tests for the bakePie function
 */

'use strict';

const { bakePie } = require('../src/pie');

// Your tests here

const exit = jest.spyOn(process, 'exit').mockImplementation((code) => code);
describe('bakePie', () => {
  let log;
  beforeEach(() => {
    log = jest.spyOn(console, 'log');
  });
  afterEach(() => {
    log.mockRestore();
  });

  // unit test 1 (condition that does not call process.exit)
  test('Successfully Baked with all required ingredients', () => {
    const ingredients = ['flour', 'sugar', 'butter'];
    let pieType = 'PieName1';
    let message = bakePie(pieType, ingredients);
    expect(message).toBe('Success: Pie Successfully Baked!');
    expect(exit).not.toHaveBeenCalled();
  });

  // unit test 2 (condition that does not call process.exit)
  test('Failed Baking with all required ingredients', () => {
    const ingredients = ['flour', 'sugar', 'butter'];
    let pieType = 'PieName2';
    let message = bakePie(pieType, ingredients);
    expect(message).toBe('Failed Baking: All ingredients present!');
    expect(exit).not.toHaveBeenCalled();
  });

  // unit test 3 (condition that does call process.exit)
  test('identifies a missing ingredient', () => {
    const ingredients = ['flour', 'sugar'];
    let pieType = 'PieName3';
    let message = bakePie(pieType, ingredients);
    expect(log).toHaveBeenCalledWith('Warning: Missing ingredients: butter');
    expect(exit).toHaveBeenCalledWith(1);
  });
});
