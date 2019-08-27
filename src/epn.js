const log = require("./log");
const chalk = require("chalk");
const browseFiles = require("./browseFiles");
const hls = require("./hls");
const argv = require("yargs").options({
	volume: {
		alias: "v",
		describe: `Specify the volume`,
		type: "number"
	},
	issue: {
		alias: "i",
		describe: `Specify the issue number`,
		type: "number"
	}
}).argv;

/**
 * @param  {Number} vol=1
 * @param  {Number} issue=2
 * @returns {Promise<String>}
 */
async function epn(vol = 1, issue = 2) {
	try {
		await log(`EPN Vol. ${vol} Issue ${issue}`, "new");
	} catch (error) {
		// @ts-ignore
		console.log(chalk`{red ${error}}`);
	}
	const data = await browseFiles();
	await hls(data, vol, issue);
	return "done";
}

if (!argv.v || !argv.i) {
	console.log(
		// @ts-ignore
		chalk`{red.bold Error: undefined parameter} {bgBlue Use --v=VOLUME --i=ISSUE_NUMBER}`
	);
} else {
	epn(argv.volume, argv.issue);
}
