const docxParser = require("docx-parser");

function parseDocx() {
	return new Promise((res, err) => {
		try {
			docxParser.parseDocx(`${__dirname}/../HL/a.docx`, function(data) {
				res(data);
			});
		} catch (error) {
			err(error);
		}
	});
}

module.exports = parseDocx;
