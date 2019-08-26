const browse = require("./browse");
const renameFolder = require("./tools/renameFolder");

async function browseFiles() {
	return new Promise(async (res, err) => {
		const folders = await browse();
		const files = await Promise.all([...folders.map(folder => browse(folder))]);

		const outData = folders.reduce((a, k, i) => {
			return (a = { ...a, [renameFolder(k)]: files[i] });
		}, {});
		res(outData);
	});
}

module.exports = browseFiles;
