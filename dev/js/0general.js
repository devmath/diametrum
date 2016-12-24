var window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	img_tag		 = document.getElementsByTagName('img'),
	p_tag = document.getElementsByTagName('p'),
	a_tag = document.getElementsByTagName('a'),
	h1_tag = document.getElementsByTagName('h1'),
	h2_tag = document.getElementsByTagName('h2'),
	h3_tag = document.getElementsByTagName('h3'),
	rand = 0;

function randomNum() {
	rand = Math.floor((Math.random() * 10) + 1);
	return this;
}

randomNum();