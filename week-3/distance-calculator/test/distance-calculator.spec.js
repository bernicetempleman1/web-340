/**
 * Author: Bernice Templeman
 * Date: 04/06/2024
 * File Name: distance-calculator.spec.js
 * Description: test distance-calculator.js
 */
'use strict';
const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

// test the distance from Earth to Mars
function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance('Earth', 'Mars'), '0.52 AU');
    console.log('Passed testEarthToMars');
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

// test the distance from Mars to Earth
function testMarsToEarth() {
  try {
    assert.strictEqual(calculateDistance('Mars', 'Earth'), '0.52 AU');
    console.log('Passed testMarsToEarth');
    return true;
  } catch (error) {
    console.error(`Failed testMarsToEarth: ${error.message}`);
    return false;
  }
}

// test for valid planet names
function testNotValidPlanetName() {
  try {
    assert.strictEqual(calculateDistance('Earth', 'Mar'), -1);
    console.log('Passed testNotValidPlanetName');
    throw new RangeError("Planet name must be a valid planet name'");
  } catch (error) {
    if (error.message === 'Planet name must be a valid planet name') {
      console.log('Passed testNotValidPlanetName');
      return true;
    } else {
      console.error(`Failed testNotValidPlanetName: ${error.message}`);
      return false;
    }
  }
}

// Call your test functions here
testEarthToMars();
testMarsToEarth();
testNotValidPlanetName();


