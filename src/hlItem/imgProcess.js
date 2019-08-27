const path = require("path");
const sharp = require("sharp");
const chalk = require("chalk");

async function imgProcess(imgData) {
	return new Promise(async (res, err) => {
		if (!imgData.imgPath) {
			// @ts-ignore
			console.log(chalk`{green - No image found for ${imgData.author}}`);
			res("no image");
		} else {
			const srcPath = path.join(__dirname, `../../HL/${imgData.imgPath}`);
			const dstPath = path.join(__dirname, `../../out/${imgData.author}.jpg`);

			await sharp(srcPath).toFile(dstPath, error => {
				if (error) {
					err(error);
				}
			});
			// @ts-ignore
			console.log(chalk`{green - Processed ${imgData.author}.jpg}`);
			res(`${imgData.author} img`);
		}
	});
}

module.exports = imgProcess;
