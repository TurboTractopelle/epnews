function findFile(arr, format) {
	const myRegExp = new RegExp(`${format}$`, "i");
	const match = arr.filter(item => item.match(myRegExp))[0];
	return match;
}

module.exports = findFile;
