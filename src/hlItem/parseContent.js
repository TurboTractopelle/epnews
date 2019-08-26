function parseContent(data) {
	const parsing = data.split("\n").filter(a => a && a !== "\r");
	//console.log(parsing);

	// remove section title
	const first = parsing[0];
	if (first && first === first.toUpperCase()) {
		parsing.shift();
	}

	const article = {};
	article.title = parsing[0];
	article.p = parsing[1];
	article.authors = parsing[2];
	article.figcaption = parsing[3];

	return article;
}

module.exports = parseContent;
