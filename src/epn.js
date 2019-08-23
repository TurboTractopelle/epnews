const parseContent = require("./parseContent");
const template = require("./template");
const parseDocx = require("./parseDocx");
const chalk = require("chalk");
const argv = require("yargs").options({
	volume: {
		alias: "v",
		describe: `Specify the volume`,
		type: "string"
	},
	issue: {
		alias: "i",
		describe: `Specify the issue number`,
		type: "string"
	}
}).argv;

async function openFile() {
	try {
		const data = await parseDocx();
		const article = parseContent(data);
		const articleHtml = template(article, argv.volume, argv.issue);
		console.log(articleHtml);
	} catch (error) {
		console.log(chalk`{red ${error}}`);
	}
}

if (!argv.v || !argv.i) {
	console.log(
		chalk`{red.bold Error: undefined parameter} {bgBlue Use --v=VOLUME --i=ISSUE_NUMBER}`
	);
} else {
	openFile();
}
