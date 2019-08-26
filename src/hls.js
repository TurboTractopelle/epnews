const hl = require("./hlItem/hlItem");

function hls(data, vol, issue) {
	return Promise.all([...data.map(item => hl(item))]);
}
module.exports = hls;
