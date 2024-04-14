/**
 * Author: Bernice Templeman
 * Date: 04/13/2024
 * File Name: index.js
 * Description: CLI program (index.js) that uses the SuperheroEmitter class.
 */

"use strict";

const readline = require("readline");
const SuperheroEmitter = require("./superhero");

const superhero = new SuperheroEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the superhero object

// Command: action fly, prints Superhero performs action: fly
superhero.on("action", (action) => {
  console.log(`Superhero performs action: ${action}`);
});

// Command: danger fire, prints Superhero encounters danger: fire
superhero.on("danger", (danger) => {
  console.log(`Superhero encounters danger: ${danger}`);
});

// Command: help Mary Jane, prints Superhero helps: Mary Jane
superhero.on("help", (person) => {
  console.log(`Superhero helps: ${person}`);
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  let clArgument = "";
  for(let item of args) {
    clArgument += item + " ";
  }
  clArgument = clArgument.trim();

  // TODO: Handle the commands
  switch(command) {
    case "action":
      superhero.performAction(clArgument);
      break;
    case "danger":
      superhero.encounterDanger(clArgument);
      break;
    case "help":
      superhero.helpSomeone(clArgument);
      break;
    default:
      console.log(`Enter a command: "action", "danger", or "help", followed by a space and the argument.`);
      break;
  }

});

console.log(`Enter a command: "action", "danger", or "help", followed by a space and the argument.`);