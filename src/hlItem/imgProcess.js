const path = require("path");
const sharp = require("sharp");
const chalk = require("chalk");

async function imgProcess(imgData) {
	if (!imgData.imgPath) {
		return "no image";
	} else {
		try {
			const srcPath = path.join(__dirname, `../../HL/${imgData.imgPath}`);
			const dstPath = path.join(__dirname, `../../out/${imgData.author}.jpg`);

			await sharp(srcPath).toFile(dstPath, err => {
				return new Error(err);
			});
			console.log(chalk`{green Processing ${imgData.author}.jpg}`);
		} catch (err) {
			return new Error(err);
		}
	}
	return `${imgData.author} img`;
}

module.exports = imgProcess;
