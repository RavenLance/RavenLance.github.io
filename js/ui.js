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
function fillNotes() {
	var $dragScript = "$( '#moreContent2' ).draggable()"
	var $htmlDoc = jQuery("#moreContent2");
	$htmlDoc.load("./notes/HighSpeedNetworks/ContentStructure.html");

	$('#moreContent2').append($dragScript);
}
