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
	$( "#container2" ).draggable().position({
	my: "center",
	at: "center",
	of: window
	});
});

function openNotes() {
	var $htmlDoc = jQuery("div");
	$htmlDoc.addClass("noteview");
	$htmlDoc.load("./notes/notes.html");

	document.getElementById('content').appendChild($htmlDoc.html);

	//$( "#container2" ).draggable().position({
	//my: "center",
	//at: "center",
	//of: window
	//});
}
