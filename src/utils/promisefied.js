/**
 * @module promisefied
 * This module simply transforms functions that return a callback
 * into functions that return a promise
 */

// Import node modules
const request = require('request');
const logger = require('logger');

module.exports = promisefied = {
  request: options => {
    return new Promise((resolve, reject) => {
      request(options, (err, res, body) => {
        if (!err) return resolve({ res, body });
        else {
          logger.debug(err);
          return reject(901);
        }
      });
    });
  },

  jsonParse: string => {
    return new Promise((resolve, reject) => {
      try {
        return resolve(JSON.parse(string));
      }
      catch (e) {
        return reject(902);
      }
    });
  },
};
