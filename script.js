$(document).ready(function(){
	$(".fit-title").click(function(){
		$(".fit").removeClass("gone");
		$(".ninament").addClass("gone");
		$(".thad").addClass("gone");
		$(".drawing").addClass("gone");
		$(".passerby").addClass("gone");
	});

	$(".ninament-title").click(function(){
		$(".ninament").removeClass("gone");
		$(".fit").addClass("gone");
		$(".thad").addClass("gone");
		$(".drawing").addClass("gone");
		$(".passerby").addClass("gone");
	});

	$(".thad-title").click(function(){
		$(".thad").removeClass("gone");
		$(".fit").addClass("gone");
		$(".ninament").addClass("gone");
		$(".drawing").addClass("gone");
		$(".passerby").addClass("gone");
	});

	$(".passerby-title").click(function(){
		$(".passerby").removeClass("gone");
		$(".fit").addClass("gone");
		$(".ninament").addClass("gone");
		$(".drawing").addClass("gone");
		$(".thad").addClass("gone");
	});

	$(".drawings-title").click(function(){
		$(".drawing").removeClass("gone");
		$(".fit").addClass("gone");
		$(".ninament").addClass("gone");
		$(".passerby").addClass("gone");
		$(".thad").addClass("gone");
	});
});

var bOne = document.querySelector("#one");
var bOneLength = bOne.getTotalLength();
bOne.style.strokeDasharray = bOneLength + ' ' + bOneLength;
bOne.style.strokeDashoffset = bOneLength;

var bTwo = document.querySelector("#two");
var bTwoLength = bTwo.getTotalLength();
bTwo.style.strokeDasharray = bTwoLength + ' ' + bTwoLength;
bTwo.style.strokeDashoffset = bTwoLength;

// var bThree = document.querySelector("#three");
// var bThreeLength = bThree.getTotalLength();
// bThree.style.strokeDasharray = bThreeLength + ' ' + bThreeLength;
// bThree.style.strokeDashoffset = bThreeLength;

// var bFour = document.querySelector("#four");
// var bFourLength = bFour.getTotalLength();
// bFour.style.strokeDasharray = bFourLength + ' ' + bFourLength;
// bFour.style.strokeDashoffset = bFourLength;

window.addEventListener("scroll", function(e) {
var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

if (scrollPercentage >= .01){
	var element = document.getElementById("scroll");
    element.classList.add("hidden");
} else {
	var element = document.getElementById("scroll");
    element.classList.remove("hidden");
}

if (scrollPercentage < 1){
	var drawbOne = bOneLength * scrollPercentage;
	var drawbTwo = bTwoLength * scrollPercentage;
	// var drawbThree = bThreeLength * scrollPercentage;
	// var drawbFour = bFourLength * scrollPercentage;
}

bOne.style.strokeDashoffset = bOneLength - drawbOne;
bTwo.style.strokeDashoffset = bTwoLength - drawbTwo;
// bThree.style.strokeDashoffset = bThreeLength - drawbThree;
// bFour.style.strokeDashoffset = bFourLength - drawbFour;

  if (scrollPercentage >= 0.99) {
    bOne.style.strokeDasharray = "none";
    bTwo.style.strokeDasharray = "none";
    bThree.style.strokeDasharray = "none";
    bFour.style.strokeDasharray = "none";
    
  } else {
    bOne.style.strokeDasharray = bOneLength + ' ' + bOneLength;
    bTwo.style.strokeDasharray = bTwoLength + ' ' + bTwoLength;
    bThree.style.strokeDasharray = bThreeLength + ' ' + bThreeLength;
    bFour.style.strokeDasharray = bFourLength + ' ' + bFourLength;
  }
  
});
