const browse = require("./browse");
const renameFolder = require("./tools/renameFolder");
const findFile = require("./tools/findFile");

async function browseFiles() {
	return new Promise(async (res, err) => {
		const folders = await browse();
		const files = await Promise.all([...folders.map(folder => browse(folder))]);

		const outData = folders.reduce((a, k, i) => {
			const docxFile = findFile(files[i], "docx");
			const imgFile = findFile(files[i], "img");
			let imgPath;
			if (imgFile) {
				imgPath = folders[i] + "/" + imgFile;
			}

			return (a = { ...a, [renameFolder(k)]: { docxFile: `${folders[i]}/${docxFile}`, imgPath } });
		}, {});
		res(outData);
	});
}

module.exports = browseFiles;
