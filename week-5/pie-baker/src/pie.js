/**
 * Author: Bernice Templeman
 * Date: 04/21/2024
 * File Name: pie.js
 * Description: module that simulates a simple pie baker.
 */
'use strict';

function bakePie(pieType, ingredients) {
  // Your code here
  // The function should return a message indicating whether the pie was successfully baked or not.
  // If an essential ingredient is missing, the function should log a warning message and call process.exit(1).
  // The essential ingredients are: flour, sugar, and butter

  const ingredientsLC = ingredients.map((ingredient) =>
    ingredient.toLowerCase()
  );

  // check for missing ingredients
  let missingFlag = false;
  let message = 'Warning: Missing ingredients: ';
  if (!ingredientsLC.includes('flour')) {
    message += 'flour ';
    missingFlag = true;
  }
  if (!ingredientsLC.includes('sugar')) {
    message += 'sugar ';
    missingFlag = true;
  }
  if (!ingredientsLC.includes('butter')) {
    message += 'butter';
    missingFlag = true;
  }

  // If an essential ingredient is missing, the function should log a warning message and call process.exit(1).
  if (missingFlag) {
    console.log(message);
    process.exit(1);
  } else if (pieType === 'PieName1') {
    message = 'Success: Pie Successfully Baked!';
  } else {
    message = 'Failed Baking: All ingredients present!';
  }
  return message;
}

module.exports = { bakePie };
