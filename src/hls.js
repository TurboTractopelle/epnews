const hl = require("./hlItem/hlItem");

/**
 * @param  {Array<HlFiles>} data
 * @param  {Number} vol
 * @param  {Number} issue
 * @returns {Promise}
 */
function hls(data, vol, issue) {
	return Promise.all([...data.map(item => hl(item, vol, issue))]);
}
module.exports = hls;
