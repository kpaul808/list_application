var buttons = [
		"../assets/redButton.png",
		"../assets/orangeButton.png",
		"../assets/yellowButton.svg",
		"../assets/greenButton.png",
		"../assets/blueButton.png", 
		"../assets/violetButton.png"
];

var colors = [
		"green",
		"blue",
		"purple",
		"red",
		"orange",
		"yellow"
];

var	count = 0;
var cycle = function(array) {
	console.log(array[count]);
	if (count == array.length-1){
		count = 0;
	} else {
		count++;
	};
};

var button_switch = function(array){
	document.getElementById('JOHNCENA').src = buttons[count];
	cycle(buttons);
	background();
}

var background = function(){
	document.body.style.backgroundColor = colors[count];
}