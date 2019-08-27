const findAuthor = require("../tools/findAuthor");

function parseContent(data, author) {
	const parsing = data.split("\n").filter(a => a && a !== "\r");

	// remove section title
	const first = parsing[0];
	if (first && first === first.toUpperCase()) {
		parsing.shift();
	}

	const article = {};
	article.title = parsing[0];
	article.p = "";

	let foundAuthors = null;

	for (let i = parsing.length - 1; i > 0; i--) {
		if (findAuthor(parsing[i], author)) {
			foundAuthors = i;
			break;
		}
	}

	console.log(parsing.length, foundAuthors);
	console.log(parsing[foundAuthors]);

	if (foundAuthors) {
		article.authors = parsing[foundAuthors];
		for (let i = 2; i < foundAuthors; i++) {
			article.p += parsing[i];
		}

		for (let i = foundAuthors + 1; i < parsing.length; i++) {
			article.figcaption += parsing[i];
		}
	} else {
		article.p = parsing[1];
		article.authors = parsing[2];
		article.figcaption = parsing[3];
	}

	return article;
}

module.exports = parseContent;
