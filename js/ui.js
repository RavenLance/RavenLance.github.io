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

$when($.ajax(openNotes())).then(function() {
	dragCreation();
}

function openNotes() {
	var $htmlDoc = jQuery("#moreContent");
	$htmlDoc.load("./notes/notes.html");

	dragCreation();
}


function dragCreation() {
	$( "#container2" ).draggable();
}
