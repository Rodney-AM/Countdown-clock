var myname ="Rodney.A";
function helloworld() {
	document.write("Hello " + myname);
}

function colors() {
	var colors = new Array();
	colors[0] = "red"; colors[1] = "green";
	colors[2] = "blue"; colors[3] = "orange";
	colors[4] = "magenta"; colors[5] = "cyan";
for (var i in colors) {
	document.write("<div style=\"background-color:"
		+ colors[i] +";\">"
		+ colors[i] +"</div>\n");
}
}
function myDate() {
	var myDate = new Date();
	myDate.setFullYear(2022,7,2
		);
	var today = new Date();
	var nextweek = today + 7;
	if (nextweek > today) {
		alert("you have less than one week left");
	}
	else{
		alert("you have more than one week to go");
	}
}