/**
 * Author: Bernice Templeman
 * Date: 04/06/2024
 * File Name: distance-calculator.js
 * Description: calculate the distance between two planets
 */
// function that calculates the distance between two planets in AU, given their distances from the sun in AU
function calculateDistance(planet1, planet2) {
  'use strict';
  let planet1up = planet1.toUpperCase();
  let planet2up = planet2.toUpperCase();

  // planet distances from https://www.jpl.nasa.gov/edu/pdfs/scaless_reference.pdf
  const planetDistances = {
    "MERCURY": 0.39,
    "VENUS": 0.72,
    "EARTH": 1,
    "MARS": 1.52,
    "JUPITER": 5.2,
    "SATURN": 9.54,
    "URANUS": 19.2,
    "NEPTUNE": 30.06
  };


  // check if planet names are valid
  if ((planet1up in planetDistances) === false) {
    throw new RangeError ("Planet name must be a valid planet name");
  } else if ((planet2up in planetDistances) === false) {
    throw new  RangeError ('Planet name must be a valid planet name');
  } else {
    // get the planet distances
    let planet1Distance = planetDistances[planet1up];
    let planet2Distance = planetDistances[planet2up];

    // calculate the distance between the two planets
    let distance = planet1Distance - planet2Distance;
    if (distance < 0) {
      distance *= -1;
    }
    return(distance.toFixed(2) + ' AU');
  }
}
module.exports = calculateDistance;

