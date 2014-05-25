
mouseenter = function (object) {
	object.style.background = 'transparent url(images/menu-button-over.png) 0 0 no-repeat';
	// object.style.background = 'transparent url(images/menu-button-highlight.png) 0 0 no-repeat';
}

mouseleave = function (object) {
	object.style.background = 'transparent url(images/menu-button.png) 0 0 no-repeat';
}

mousedown = function (object) {
	object.style.background = 'transparent url(images/menu-button-click.png) 0 0 no-repeat';
}

mouseup = function (object) {
	object.style.background = 'transparent url(images/menu-button-over.png) 0 0 no-repeat';
	// object.style.background = 'transparent url(images/menu-button-highlight.png) 0 0 no-repeat';
}

mouseclick = function (object, pagename) {
	document.getElementById('iframe_content').src = pagename + '.html';
}

// menu-button-highlight.png