const fs = require("fs");
const path = require("path");
/**
 * @param  {String} myPath="" - Path to the folder to browse
 * @returns {Promise}
 */
function browse(myPath = "") {
	return new Promise((res, err) => {
		fs.readdir(path.join(__dirname, `../HL/${myPath}`), (error, data) => {
			if (error) {
				err(error);
			} else {
				res(data);
			}
		});
	});
}

module.exports = browse;
