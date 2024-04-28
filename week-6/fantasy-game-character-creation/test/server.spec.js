/**
 * Author: Bernice Templeman
 * Date: 04/27/2024
 * File Name: server.spec.js
 * Description: Tests server.js
 */
'use strict';

const http = require('http');
const server = require('../src/server');

describe('server', () => {
  afterAll(() => {
    server.close();
  });

  // Test A POST route for creating a character.
  // This route should accept query parameters for the character’s class (Warrior, Mage, Rogue), gender (Male,Female, Other), and a fun fact about your character.
  test('responds to /create POST request with query parameters', (done) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/create?class=mage&gender=female&funFact=eternal',
      method: 'POST',
    };
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe('Character created.');
        done();
      });
    });
    req.end();
  });

  // Test A POST route for confirming the character creation.
  test('responds to /confirm POST request', (done) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/confirm',
      method: 'POST',
    };
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Character creation has been confirmed.');
        done();
      });
    });
    req.end();
  });

  // Test A GET route for viewing the character. This must be the same character that was created in the 1st test
  test('responds to /view GET request', (done) => {
    http.get('http://localhost:3000/view', (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Character: mage female eternal');
        done();
      });
    });
  });
});
