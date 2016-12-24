var lang  = document.getElementsByTagName('html')[0].getAttribute('lang');

if (p_tag.length > 0) {
	for (var i = 0; i < p_tag.length; i++) {
		p_tag[i].setAttribute('lang', lang);
	}
}

if (a_tag.length > 0) {
	for (var i = 0; i < a_tag.length; i++) {
		a_tag[i].setAttribute('lang', lang);
	}
}

if (h1_tag.length > 0) {
	for (var i = 0; i < h1_tag.length; i++) {
		h1_tag[i].setAttribute('lang', lang);
	}
}

if (h2_tag.length > 0) {
	for (var i = 0; i < h2_tag.length; i++) {
		h2_tag[i].setAttribute('lang', lang);
	}
}

if (h3_tag.length > 0) {
	for (var i = 0; i < h3_tag.length; i++) {
		h3_tag[i].setAttribute('lang', lang);
	}
}