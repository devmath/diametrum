var src = '';

if (img_tag.length > 0) {
	for (var i = 0, imgLength = img_tag.length; i < imgLength; i++) {
		src = img_tag[i].src;

		if (src.indexOf('/assets') == -1 && src.indexOf(window.location.hostname) !== -1) {
			var sr = src.split('/img').pop();
			img_tag[i].src = '/assets/img' + sr; 
		}
	}
}