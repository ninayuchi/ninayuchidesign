var myArray = [
  'a DMV-based graphic designer.',
  'an amateur tofu chef.',
  'a tiger in the Chinese zodiac.',
  'an Aquarius in the Western zodiac.',
  'a dog person (and allergic to cats).',
  'currently listening to <a href="https://open.spotify.com/album/6K7SjlIebufubxXGf4uA7a?si=_WQqGTq6QrKPanIHrADRcw" target="_blank">Live on Ice.</a>',
  'a graphic design student at RISD.'
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

document.getElementById("array").innerHTML = randomItem;

function myFunction() {
	document.getElementById("array").innerHTML = myArray[Math.floor(Math.random()*myArray.length)];
}