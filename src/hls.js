const chalk = require("chalk");
const imgProcess = require("./hlItem/imgProcess");
const docxProcess = require("./hlItem/docxProcess");

/**
 * @param  {Array<HlFiles>} data
 * @param  {Number} vol
 * @param  {Number} issue
 * @returns {Promise}
 */
async function hls(data, vol, issue) {
	return new Promise(async (res, err) => {
		// @ts-ignore
		console.log(chalk`{cyan Processing ${data.length} highlight items}`);

		// processing images
		const images = await Promise.all([...data.map(item => imgProcess(item))]);

		// processing docxFiles
		const docx = await Promise.all([...data.map(item => (a => docxProcess(a, vol, issue))(item))]);

		console.log(docx);
		res("images and docx processed");
	});
}
module.exports = hls;
