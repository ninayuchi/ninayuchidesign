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
		var selectedProjectID = $(this).attr("id");
		console.log(selectedProjectID);

		if (selectedProjectID = deceptiveSpeech){
			console.log("aaaaAAAAAA"); 
		}


		// switch (selectedProjectID){
		// 	case deceptiveSpeech:
		// 		// imageHold.css('backgroundImage', 'url("random.jpg")');
		// 		// imageHold.css('backgroundSize', 'auto 100%');
		// 		console.log("aaaaAAAAAA");
		// 	break;
		// 	case ninament:
		// 		// imageHold.css('backgroundImage', 'url("random.jpg")');
		// 		// imageHold.css('backgroundSize', 'auto 100%');
		// 		console.log("aaaaAAAAAAPLSSSS");
		// 	break;
		// 	default:
		// 		imageHold.css('backgroundImage', 'url("test.png")');
		// 		imageHold.css('backgroundSize', '100% 100%');
		// 		console.log("68");
		// }
	}, function() { 
		imageHold.css('backgroundImage', 'url("test.png")');
		imageHold.css('backgroundSize', '100% 100%');
	});




});