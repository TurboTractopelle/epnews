const chalk = require("chalk");
const imgProcess = require("./imgProcess");
const docxProcess = require("./docxProcess");

async function hl(hlItem, vol, issue) {
	console.log(chalk`{cyan Processing ${hlItem.author} HL}`);
	return Promise.all([imgProcess(hlItem), docxProcess(hlItem, vol, issue)]);
}
module.exports = hl;
