document.addEventListener('DOMContentLoaded', function () {
	var elements = document.getElementsByClassName("spoiler");
	[].forEach.call(elements, function (e) {
		e.addEventListener("click", function (e) {
			this.classList.toggle('spoiler');
			this.classList.toggle('spoiler-off');
		}, false);
	});
}, false);