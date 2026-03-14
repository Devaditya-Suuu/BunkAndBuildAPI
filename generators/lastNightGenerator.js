const { activities, subjects, results } = require("../data/lastNightData");

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateLastNight() {
  return `Last night I ${random(activities)} ${random(subjects)} ${random(results)}.`;
}

module.exports = generateLastNight;
