function parseContent(data) {
	const parsing = data.split("\n").filter(a => a && a !== "\r");
	//console.log(parsing[0]);

	// remove section
	const first = parsing[0];
	if (first === first.toUpperCase()) {
		parsing.shift();
	}

	const article = {};
	article.title = parsing[0];
	article.p = parsing[1];
	article.authors = parsing[2];
	article.figcaption = parsing[3];

	console.log(article);
	return article;
}

module.exports = parseContent;
