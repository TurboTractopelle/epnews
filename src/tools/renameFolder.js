function renameFolder(folderName) {
	const myReg = new RegExp("^HL-(.*)", "i");
	const name = myReg.exec(folderName);
	return name[1];
}

module.exports = renameFolder;
