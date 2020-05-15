// ADDING NEW IMAGE
 var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
	image.style.left = "45vw";
	image.style.top= "45vh";

	var newImage = document.createElement("IMG");
	newImage.setAttribute("id", "output");
	document.getElementById("body").appendChild(newImage);

	image.removeAttribute("id", "output");

	$( function() {
    	$( "img" ).draggable();
  	} );
};

// ABOUT WINDOW
var openAboutWindow = function(event){
	document.getElementById('about-box').setAttribute("style", "display:block;");
};

var closeAboutWindow = function(event){
	document.getElementById('about-box').setAttribute("style", "display:none;");
};

// AXIS WINDOW
var openAxisWindow = function(event){
	document.getElementById('axis-box').setAttribute("style", "display:block;");
};

var closeAxisWindow = function(event){
	document.getElementById('axis-box').setAttribute("style", "display:none;");
};


// CHANGE AXIS LABELS
var changeAxis = function(event){
	
	var x1 = document.getElementById('x1').value;
	var x2 = document.getElementById('x2').value;
	var y1 = document.getElementById('y1').value;
	var y2 = document.getElementById('y2').value;


	if (x1 == "" || x2 == "" || y1 == "" || y2 == "") {
		alert("Please enter axis labels.");
		document.getElementById('axis-box').setAttribute("style", "display:block;");
	} else {
		document.getElementById('x-label-1').innerHTML = x1;
		document.getElementById('x-label-2').innerHTML = x2;
		document.getElementById('y-label-1').innerHTML = y1;
		document.getElementById('y-label-2').innerHTML = y2;
		document.getElementById('axis-box').setAttribute("style", "display:none;");

	};
};

// DELETE ALL IMAGES

var deleteAll = function(event){
	var a = confirm ("Are you sure you want to delete all images?");
	if (a===true){
		$("img").remove();
	}
}

// JQUERY
$(function(){
	// CLICKY CLICK, DRAGGY DRAG

	var myImages = $("img");
	var click = myImages.mousedown(function(){
		var selected = $(this);
		myImages.css("z-index", "1");
		selected.css("z-index", "10");
		myImages.css("box-shadow", "2px 2px 8px #424242");
		selected.css("box-shadow", "0px 0px 10px #fff");

	// DELETE
		$("#deleteSelected").click(function(){
			selected.remove();
		});
	});

	// DRAGGABLE
	$( "img" ).draggable();
    $( "#axis-box" ).draggable();
    $( "#about-box" ).draggable();

});

function createPDF() {
	var doc = new jsPDF({ orientation: 'landscape'});
	var elementHTML = $('canvas').html();
	var specialElementHandlers = {
		'elementH': function(element, renderer){
			return true;
		}
	};

	doc.fromHTML(elementHTML, 0,0, {
		'width': 170,
		'elementHandlers': specialElementHandlers
	});

	doc.save('myMap.pdf');

}

function generatePDF(){
	html2canvas(document.querySelector("#body"), { 
		allowTaint: true,
		foreignObjectRendering: true,
		useCORS: true,

	}).then(canvas => {

    document.body.appendChild(canvas);

    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    image.crossOrigin = "Anonymous";
    // console.log(image);
    // window.location.href=image;

    this.createPDF();
    document.body.removeChild(canvas);

	});
}

// function saveAs(uri, filename) {

//     var link = document.createElement('a');

//     if (typeof link.download === 'string') {

//         link.href = uri;
//         link.download = filename;

//         //Firefox requires the link to be in the body
//         document.body.appendChild(link);

//         //simulate click
//         link.click();

//         //remove the link when done
//         document.body.removeChild(link);

//     } else {

//         window.open(uri);

//     }
// }




