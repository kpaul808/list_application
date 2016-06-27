var arr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

var	count = 0;

var cycle = function(array) {
	console.log(array[count]);
	if (count > array.length){
		count = 0;
	} else {
		count++;
	}
};

var list = function() {
	cycle(arr);
}