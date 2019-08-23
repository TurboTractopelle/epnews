const docxParser = require("docx-parser");
const parseContent = require("./parseContent");

function parsePromise() {
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

async function openFile() {
	try {
		const data = await parsePromise();
		console.log(data);
		parseContent(data);
	} catch (error) {
		console.log(error);
	}
}

openFile();
