/* eslint-disable no-console */
const { guid, generateToken, formatUsername } = require('../lib');

console.log(guid());
console.log("generateToken = ", generateToken());
console.log("formatUsername = ", formatUsername("AHAH Flávio ééé"));
