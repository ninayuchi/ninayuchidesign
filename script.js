function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var bOne = document.querySelector("#one");
var bOneLength = bOne.getTotalLength();
bOne.style.strokeDasharray = bOneLength + ' ' + bOneLength;
bOne.style.strokeDashoffset = bOneLength;


window.addEventListener("scroll", function(e) {
var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

if (scrollPercentage < 1){
	var drawbOne = bOneLength * scrollPercentage;
}

bOne.style.strokeDashoffset = bOneLength - drawbOne;

  if (scrollPercentage >= 0.99) {
    bOne.style.strokeDasharray = "none";
    
  } else {
    bOne.style.strokeDasharray = bOneLength + ' ' + bOneLength;
  }
  
});
