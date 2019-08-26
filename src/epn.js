const parseContent = require("./hlItem/parseContent");
const template = require("./hlItem/template");
const parseDocx = require("./hlItem/parseDocx");
const chalk = require("chalk");
const browseFiles = require("./browseFiles");
const log = require("./log");
const hls = require("./hls");
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

async function openFile(vol, issue) {
	try {
		await log(`EPN Vol. ${vol} Issue ${issue}`, "new");
		const data = await parseDocx();
		const article = parseContent(data);
		const articleHtml = template(article, vol, issue);
		log(articleHtml, "article");
	} catch (error) {
		console.log(chalk`{red ${error}}`);
	}
}

async function epn() {
	const data = await browseFiles();
	await hls(data);
	return "done";
}

epn();

/*
if (!argv.v || !argv.i) {
	epn();

	console.log(
		chalk`{red.bold Error: undefined parameter} {bgBlue Use --v=VOLUME --i=ISSUE_NUMBER}`
	);
} else {
	epn(argv.v, argv.i);
}*/
