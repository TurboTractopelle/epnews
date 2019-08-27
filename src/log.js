const fs = require("fs");

/**
 * @param  {String} msg - The message to log
 * @param  {("new"|"article")} option
 * @returns {Promise}
 */
function log(msg, option) {
	let flag = "a";

	if (option === "new") {
		flag = "w";
	}

	if (option === "article") {
		let sep = "-".repeat(40);
		msg = `${sep}\n${msg}\n`;
	}

	return new Promise((res, err) => {
		try {
			const stream = fs.createWriteStream(`${__dirname}/../out/HL.html`, {
				flags: flag
			});
			stream.write(`${msg}` + "\n");
			stream.end();
			res();
		} catch (error) {
			err(error);
		}
	});
}

module.exports = log;
