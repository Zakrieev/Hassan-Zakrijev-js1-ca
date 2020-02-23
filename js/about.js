function delay() {
	document.body.innerHTML = document.body.innerHTML
		.replace(/The/g, "Replaced")
		.replace(/the/g, "replaced");
}

setTimeout(delay, 4000);
