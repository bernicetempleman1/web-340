"use strict";
/**
 * Author: Bernice Templeman
 * Date: 03/23/2024
 * File Name: weight-converter.ks
 * Description: Converts pounds to kilograms:
 * The script should take one command line argument, which is the weight in pounds.
 * The script should print the converted weight in kilograms to the console.
 * The output should be rounded to two decimal places.
 * If the script is run without a command line argument, it should print the following message:
 *    stderr: ‘Usage: node weight-converter.js <pounds>’
 * If the script is run with a non-numeric command line argument, it should print
 *    ‘Input must be a number.’ to stderr.
 *
 * How to Run the Script
 * To run the script, use the following command in your terminal: •
 *  node weight-converter <pounds>
 * Replace <pounds> with the weight you want to convert.
*/

// TODO: Implement the weight conversion logic here

// main function for the program
function main() {
  const conversion = 0.454; //conversion from pounds to kilograms

  // Check for three arguments in argv (command line)
  if(process.argv.length === 3) { // Use process.argv to access the command line arguments.
    let pounds = process.argv[2];
    if(isNaN(pounds)) { // If the script is run with a non-numeric command line argument
      processErrors("Input must be a number"); //print message to standard error
    } else { // Convert to pounds to kilograms rounded to 2 decimal places and display message
      let kilograms = (pounds * conversion).toFixed(2); // convert and round to 2 decimals
      console.log(kilograms); // print the converted weight in kilograms to the console.
    }
  } else { // the script is run without a command line argument, it should print the following message
    processErrors("Usage: node weight-converter.js <pounds>"); //print message to standard error
  }
}

// processErrors Function to display error message and exit
// modified from processErrors() by Carey, Patrick; Vodnik, Sasha. JavaScript for Web Warriors (p. 151). Course Technology Inc. Kindle Edition.
function processErrors(msg) {
  console.error(msg); // Use console.error to print error messages to stderr
  process.exit(1); // Use process.exit(1) to exit the script with a non-zero status code when an error occurs.
}

main(); // Run main function