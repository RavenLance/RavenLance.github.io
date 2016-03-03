// postition won't work correctly if you
// use a custom userChrome.css that modifies
// the browsers default content display.
// UI mods should not affect it.

$(document).ready(function() {
	$( "#container" ).draggable().position({
	my: "center",
	at: "center",
	of: window
	});
});

function openNotes() {
	var $htmlDoc = jQuery("#moreContent");
	$htmlDoc.load("./notes/notes.html");
}

// A future function to be implemented
// When the notes section becomes filled
function fillNotes(urlName) {
	var $htmlDoc = jQuery("#moreContent2");
	$htmldoc.load("./notes/HighSpeedNetworks/ContentStructure.html");
}
