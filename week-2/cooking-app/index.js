/**
 * Author: Bernice Templeman
 * Date: 03/31/2024
 * File Name: index.js
 * Description: Use the index.js file to demonstrate the functionality of your recipe modules
*/

"use strict";

// TODO: Import your module using require
// Try to import the recipe module

const { createRecipe, setTimer, quit } = require("./recipes.js");


// TODO: Implement your CLI program here
function main() {
  const ingredients = ["Greens", "Beans", "Crushed tomatoes", "garlic", "onion", "parsley", "potatoes"];
  console.log(createRecipe(ingredients)); // call the create recipe function
  console.log(setTimer(15)); //call the setTimer function
  console.log(quit()); // call the quit function
  }

  main(); // call the main() function