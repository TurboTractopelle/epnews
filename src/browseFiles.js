const browse = require("./browse");
const renameFolder = require("./tools/renameFolder");
const findFile = require("./tools/findFile");

/**
 * @returns {Promise<Array.<HlFiles>>}
 */
async function browseFiles() {
	return new Promise(async (res, err) => {
		const folders = await browse();
		const files = await Promise.all([...folders.map(folder => browse(folder))]).catch(error =>
			err(error)
		);

		const outData = folders.reduce((a, k, i) => {
			const docxFile = findFile(files[i], "docx");
			const imgFile = findFile(files[i], "img");
			let imgPath;
			if (imgFile) {
				imgPath = folders[i] + "/" + imgFile;
			}

			return (a = [
				...a,
				{ author: renameFolder(k), docxPath: `${folders[i]}/${docxFile}`, imgPath, imgFile }
			]);
		}, []);
		res(outData);
	});
}

module.exports = browseFiles;
