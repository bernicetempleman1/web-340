/**
 * Author: Bernice Templeman
 * Date: 04/13/2024
 * File Name:superhero.spec.js
 * Description: test superhero.js
 */
'use strict';

const assert = require('assert');
const SuperheroEmitter = require('../src/superhero');

const superhero = new SuperheroEmitter();

// TODO: Write tests for the SuperheroEmitter using TDD principles
// For the class module, write three (3) different unit tests in superhero-spec.js using
// the Node.js assert library. Each test should register an event listener for the emitted
// event, call the class method, and print either a pass or fail message to the console.

// test performAction(action: string): Emits an “action” event with the action as the actual parameter.
function testPerformAction() {
  try {
    let testResult = '';
    // register an event listener for the ‘action’ event
    superhero.on('action', (action) => {
      console.log(`The action is ${action}`);
      testResult = action;
    });

    // call the perform action method
    superhero.performAction('fly');
    assert.strictEqual(testResult, 'fly');
    console.log('Passed testPerformAction');
    return true;
  } catch (err) {
    console.error(`Failed testPerformAction: ${err}`);
    return false;
  }
}

// test encounterDanger(danger: string): Emits a “danger” event with the danger as the actual parameter.
function testEncounterDanger() {
  try {
    let testResult = '';
    // register an event listener for the danger event
    superhero.on('danger', (danger) => {
      console.log(`The danger is ${danger}`);
      testResult = danger;
    });

    // call the encounter danger method
    superhero.encounterDanger('fire');
    assert.strictEqual(testResult, 'fire');
    console.log('Passed testEncounterDanger');
    return true;
  } catch (err) {
    console.error(`Failed testEncounterDanger: ${err}`);
    return false;
  }
}

// test helpSomeone(person: string): Emits a “help” event with the person as the actual parameter.
function testHelpSomeone() {
  try {
    let testResult = '';
    // register an event listener for the ‘help’ event
    superhero.on('help', (person) => {
      console.log(`The person is ${person}`);
      testResult = person;
    });

    // call the help person method
    superhero.helpSomeone('Mary Jane');
    assert.strictEqual(testResult, 'Mary Jane');
    console.log('Passed testHelpSomeone');
    return true;
  } catch (err) {
    console.error(`Failed testHelpSomeone: ${err}`);
    return false;
  }
}

// Call your test functions here
testPerformAction();
testEncounterDanger();
testHelpSomeone();
