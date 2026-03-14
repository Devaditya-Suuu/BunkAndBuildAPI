const { openers, traits, endings } = require("../data/roastData");

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRoast() {
  return `${random(openers)} ${random(traits)} ${random(endings)}`;
}

module.exports = generateRoast;
