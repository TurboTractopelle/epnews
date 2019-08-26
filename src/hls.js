const hl = require("./hlItem/hlItem");

function hls(data) {
	return Promise.all([...data.map(item => console.log(item))]);
}
module.exports = hls;
