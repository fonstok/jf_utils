// returns the width and height of the window
const getWDs = function () {
	return {
		h: window.innerHeight || document.documentElement.clientHeight,
		w: window.innerWidth || document.documentElement.clientWidth,
	};
};

const isElementInFocus = function (el) {
	let rect = el.getBoundingClientRect();
	let turnPointY = getWDs().h / 2;
	let turnPointX = getWDs().w / 2;
	let inView = (rect.top <= turnPointY && rect.top >= 0) || (rect.bottom <= getWDs().h && rect.bottom >= turnPointY) || (rect.top <= 0 && rect.bottom >= turnPointY);

	/*
	console.clear();
	console.log("element = " + el.id);
	console.log("elements top = " + rect.top);
	console.log("elements bottom  = " + rect.bottom);
	console.log("window height  = " + getWDs().h);
	console.log("window width  = " + getWDs().w);
	console.log(inView);
	//*/
	return inView;
};
