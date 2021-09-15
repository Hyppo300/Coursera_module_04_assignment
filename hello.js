(function(window) {
	var speak = "Hello";
	var hello = function (name) {
		console.log(speak + " " + name);
	}

	window.hello= hello;

})(window);