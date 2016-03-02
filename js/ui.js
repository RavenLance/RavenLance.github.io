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
	var div = document.createElement('div');

	div.className = 'noteview';

	div.innerHTML.load('./notes/notes.html');

	document.getElementById('content').appendChild(div);

	//$( "#container2" ).draggable().position({
	//my: "center",
	//at: "center",
	//of: window
	//});
}
