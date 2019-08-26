const docxParser = require("docx-parser");
const path = require("path");
const parseContent = require("./parseContent");
const template = require("./template");
const exportContent = require("../log");

async function docxProcess({ author, docxPath }, vol, issue) {
	return new Promise(async (res, err) => {
		try {
			const completeDocxPath = path.join(__dirname, `../../HL/${docxPath}`);
			docxParser.parseDocx(completeDocxPath, async function(data) {
				const article = parseContent(data);
				const articleHtml = template(article, vol, issue, author);
				await exportContent(articleHtml, "article");
				res(data);
			});
		} catch (error) {
			err(error);
		}
	});
}

module.exports = docxProcess;
