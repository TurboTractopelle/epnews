function findAuthor(p, author) {
	const authorReg = new RegExp(`^[A-Z]+. ${author}`, "gi");
	const match = p.match(authorReg);
	return match;
}

module.exports = findAuthor;
