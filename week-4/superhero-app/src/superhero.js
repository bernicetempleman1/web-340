/**
 * Author: Bernice Templeman
 * Date: 04/13/2024
 * File Name: superhero.js
 * Description: SuperheroEmitter class that extends EventEmitter and implements the following methods: performAction, encounterDanger, and helpSomeone
 */
"use strict";
const EventEmitter = require("events");

// TODO: Create a SuperheroEmitter class that extends EventEmitter and implements the following methods: performAction, encounterDanger, and helpSomeone

class SuperheroEmitter extends EventEmitter {
  constructor() {
    super();
  }

  // performAction(action: string): Emits an “action” event with the action as the actual parameter.
  performAction(action) {
    this.emit("action", action);
  }

  //encounterDanger(danger: string): Emits a “danger” event with the danger as the actual parameter.
  encounterDanger(danger) {
    // Emit a danger event
    this.emit("danger", danger);
  }

  // helpSomeone(person: string): Emits a “help” event with the person as the actual parameter.
  helpSomeone(person) {
    this.emit("help", person);
  }
}

module.exports = SuperheroEmitter;


