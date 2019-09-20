const path = require("path");
const sharp = require("sharp");
const chalk = require("chalk");
const sizeOf = require("image-size");

async function imgProcess(imgData) {
	return new Promise(async (res, err) => {
		if (!imgData.imgPath) {
			// @ts-ignore
			console.log(chalk`{green - No image found for ${imgData.author}}`);
			res("no image");
		} else {
			const srcPath = path.join(__dirname, `../../HL/${imgData.imgPath}`);
			const dstPath = path.join(__dirname, `../../out/${imgData.author}.jpg`);

			// @ts-ignore
			const imgDim = sizeOf(srcPath);

			// 640 x 250
			let resizeVal = {};

			if (imgDim.height > 240) {
				resizeVal = { height: 240 };
			} else if (imgDim.width > 640) {
				resizeVal = { width: 640 };
			}

			await sharp(srcPath)
				// @ts-ignore
				.resize(resizeVal)
				.toFile(dstPath, error => {
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
