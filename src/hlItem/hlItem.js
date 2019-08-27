const chalk = require("chalk");
const imgProcess = require("./imgProcess");
const docxProcess = require("./docxProcess");

function hl(hlItem, vol, issue) {
	// @ts-ignore
	console.log(chalk`{cyan Processing ${hlItem.author} HL}`);
	return Promise.all([imgProcess(hlItem), docxProcess(hlItem, vol, issue)]);
}
module.exports = hl;
