const parseContent = require("./hlItem/parseContent");
const template = require("./hlItem/template");
const log = require("./log");
const chalk = require("chalk");
const browseFiles = require("./browseFiles");
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

async function openFile(vol, issue) {}

async function epn(vol = 1, issue = 2) {
	try {
		await log(`EPN Vol. ${vol} Issue ${issue}`, "new");
	} catch (error) {
		console.log(chalk`{red ${error}}`);
	}
	const data = await browseFiles();
	await hls(data, vol, issue);
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
