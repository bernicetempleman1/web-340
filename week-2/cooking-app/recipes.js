/**
 * Author: Bernice Templeman
 * Date: 03/31/2024
 * File Name: recipe.js
 * Description: Recipe Modules: Contains functions: createRecipe, setTimer, and quit
 */
"use strict";
// Define the createRecipe function This function should take an array of ingredients and return:
// “Recipe created with ingredients: ingredient1, ingredient2”
function createRecipe(ingredients) {
  // TODO: Implement this function
  let ingredientString = 'Recipe created with ingredients:';
  // loop over the ingredient array and output the results to a string
  for (let i = 0; i < ingredients.length; i++) {
    ingredientString +=  ' ' + ingredients[i];
    if (i < ingredients.length-1){
      ingredientString += ',';
    }
  }
  return ingredientString;
}

// Define the setTimer function
// This function should take a number of minutes and return a string in the format: “Timer set for X minutes."
function setTimer(minutes) {
  // TODO: Implement this function
  return "Timer set for " + minutes + " minutes"
}

// Define the quit function
// This function should return the string “Program exited"
function quit() {
  // TODO: Implement this function
  return "Program exited";
}

// TODO: Export the functions
  module.exports = {
  createRecipe: createRecipe,
  setTimer: setTimer,
  quit: quit
};
