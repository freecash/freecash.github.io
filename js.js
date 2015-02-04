var text = "Waste the next 10 seconds of your life on nothing.";
var count = 10;
var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
	document.getElementById("timer").innerHTML = text + "<br />" + count;
	count = count - 1;

	if (count <= -1) {
		clearInterval(counter);
		text = "Congratulations, you have wasted 10 seconds of your life.";
		document.getElementById("timer").innerHTML = text;
		return;
	}
}