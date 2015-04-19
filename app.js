var socket = new WebSocket('ws://echo.websocket.org');
if (! counter) {
	var counter = 0;
} else {
	var counter = socket.send(counter);
}
socket.onmessage = function(event) {
	counter = counter + 1;
	document.getElementById('counting-space').innerHTML = counter;
}
function count() {
	socket.send(counter);
}
socket.onopen = function() {
	setInterval(count, 1000);
	count();
};
window.close() = function() {
	socket.close();
};