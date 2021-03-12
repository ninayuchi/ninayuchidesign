// SIDEBAR CONTROLS
var openContact = function(event){
	var text = document.getElementById("contact-text");
	if (text.classList.contains("hide") == true){
		text.style.height = "auto";
		text.classList.remove("hide");
	} else{
		text.style.height = 0;
		text.classList.add("hide");
	};
};

var openAbout = function(event){
	var text = document.getElementById("about-text");
	if (text.classList.contains("hide") == true){
		text.style.height = "auto";
		text.classList.remove("hide");
	} else{
		text.style.height = 0;
		text.classList.add("hide");
	};
};

$(function(){
// PROJECT SELECTION
	$(".grid").hover(function(){
		$(this).children().css('color', '#ffe32d');
	}, function() { 
		$(this).children().css('color', '#c7c8ca');
	});

	var imageHold = $("#image-hold");
	$(".grid").hover(function(){
		var selectedProjectID = $(this).attr("id").toString();

		switch (selectedProjectID){
			case "deceptiveSpeech":
				imageHold.css('backgroundImage', 'url("covers/speech-cover.jpg")');
			break;
			case "deconstructingDiscipline":
				imageHold.css('backgroundImage', 'url("covers/dd-cover.jpg")');
			break;
			case "makeathon":
				imageHold.css('backgroundImage', 'url("covers/makeathon-cover.png")');
			break;
			case "lightbox":
				imageHold.css('backgroundImage', 'url("covers/lightbox-cover.jpg")');
			break;
			case "sparkar":
				imageHold.css('backgroundImage', 'url("covers/ar-cover.jpg")');
			break;
			case "hyphenatedidentity":
				imageHold.css('backgroundImage', 'url("covers/identity-cover.jpg")');
			break;
			case "cca":
				imageHold.css('backgroundImage', 'url("covers/cca-cover.jpg")');
			break;
			case "olympics":
				imageHold.css('backgroundImage', 'url("covers/olympics-cover.png")');
				imageHold.css('backgroundSize', '100% auto');
			break;
			case "unesco":
				imageHold.css('backgroundImage', 'url("covers/unesco-cover.jpg")');
			break;
			case "textile":
				imageHold.css('backgroundImage', 'url("covers/textile-cover.jpg")');
			break;
			case "post":
				imageHold.css('backgroundImage', 'url("covers/post-cover.jpg")');
			break;
			case "calendar":
				imageHold.css('backgroundImage', 'url("covers/calendar-cover.jpg")');
			break;
			case "typePoster":
				imageHold.css('backgroundImage', 'url("covers/type-poster-cover.jpg")');
			break;
			case "slipknot":
				imageHold.css('backgroundImage', 'url("covers/slipknot-cover.jpg")');
			break;
			case "ds":
				imageHold.css('backgroundImage', 'url("covers/ds-cover.png")');
			break;
			case "precollege":
				imageHold.css('backgroundImage', 'url("covers/precollege-cover.jpg")');
			break;
			case "ninament":
				imageHold.css('backgroundImage', 'url("covers/ninament-cover.png")');
			break;
			case "posters":
				imageHold.css('backgroundImage', 'url("covers/poster-cover.jpg")');
			break;
			case "politics":
				imageHold.css('backgroundImage', 'url("covers/politics-cover.png")');
			break;
			case "oaxaca":
				imageHold.css('backgroundImage', 'url("covers/oaxaca-cover.jpg")');
			break;
			case "rug":
				imageHold.css('backgroundImage', 'url("covers/rug-cover.png")');
			break;
			default:
				imageHold.css('backgroundImage', 'url("x.png")');
		}

		if (selectedProjectID == "olympics" || selectedProjectID == "deconstructingDiscipline"){
			imageHold.css('backgroundSize', '100% auto');
		} else if (selectedProjectID =! ""){
			imageHold.css('backgroundSize', 'auto 100%');
		}

	}, function() { 
		imageHold.css('backgroundImage', 'url("x.png")');
		imageHold.css('backgroundSize', '100% 100%');
	});




});