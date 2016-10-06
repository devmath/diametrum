var tags = document.getElementsByTagName('li'),
	counter = 3,
	article = '';
	//console.log(tags[counter].getAttribute('tag') !== 'test');

for (var i = 0; i >= tags.length; i++) {
	if (tags[i].getAttribute('tag') !== 'test') {
		counter++;
		article[counter] = tags[i].parentNode.parentNode.parentNode;
	}
}
	console.log(article);
	console.log(counter);

/*for (var j = 0; j >= article.length; j++) {
	article[j].style.display = 'none';
}*/