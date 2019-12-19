var myArray = [
  'an amateur tofu chef.',
  'a tiger in the Chinese zodiac.',
  'an Aquarius in the Western zodiac.',
  'a dog person (and allergic to cats).',
  'currently listening to <a href="https://open.spotify.com/track/5Kz1ZTkMQjhx0Chvmaoxzv?si=1YWNH5kBQwWnWfRPy_1E9Q" target="_blank">RFYL.</a>',
  'a graphic design student at RISD.',
  'thinking about her next hair color.',
  'currently blonde (soon to change).',
  'hydrated.',
  'thinking about Christmas songs.',
  'currently playing Fire Emblem.'
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

document.getElementById("array").innerHTML = randomItem;

function myFunction() {
	document.getElementById("array").innerHTML = myArray[Math.floor(Math.random()*myArray.length)];
}