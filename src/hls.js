const hl = require("./hlItem/hlItem");
const chalk = require("chalk");

/**
 * @param  {Array<HlFiles>} data
 * @param  {Number} vol
 * @param  {Number} issue
 * @returns {Promise}
 */
function hls(data, vol, issue) {
	// @ts-ignore
	console.log(chalk`{cyan Processing ${data.length} highlight items}`);
	return Promise.all([...data.map((item, i) => hl(item, vol, issue))]);
}
module.exports = hls;
