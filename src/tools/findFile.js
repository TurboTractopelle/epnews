function findFile(arr, format) {
	if (format === "img") {
		format = "(jpg|png|jpeg)";
	}
	const myRegExp = new RegExp(`${format}$`, "gi");
	console.log(arr);
	const match = arr.filter(item => item.match(myRegExp))[0];
	return match;
}

module.exports = findFile;
