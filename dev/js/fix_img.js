var img = document.getElementsByTagName('img'),
	src = '';

for (var i = 0, imgLength = img.length; i < imgLength; i++) {
	src = img[i].src;

	if (src.indexOf('/assets') == -1) {
		var sr = src.split('/img').pop();
		img[i].src = '/assets/img' + sr; 
	}
}