const chalk = require("chalk");
const imgProcess = require("./imgProcess");
const docxProcess = require("./docxProcess");

function hl(hlItem, vol, issue) {
	return Promise.all([imgProcess(hlItem), docxProcess(hlItem, vol, issue)]);
}
module.exports = hl;
