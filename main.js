/**
 * main test file
 */
'use strict';

const $ = require('jquery');

/**
 * props test
 */
const props = {
  a: 1,
  b: 2,
};

/**
 * default test
 */
const defaults = {
  a: 0,
  b: 1,
};

/**
 * event handler
 * @param {Function} callback
 */
function evHandler(callback) {
  const doc = $(document);

  doc.on('click', '#btn-test', () => {
    alert('click events!');
  });

  // callback 호출
  typeof callback === 'function' && callback();
}

/**
 * main
 */
function main() {
  // object.assign test
  const mergeOpts = Object.assign({}, defaults, props);
  // es6 arrow function test
  evHandler(() => {
    console.log('event handler binding');
  });
}

module.exports = main;