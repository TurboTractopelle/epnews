const docxParser = require("docx-parser");
const path = require("path");
const parseContent = require("./parseContent");
const template = require("./template");
const exportContent = require("../log");

/**
 * @param  {Object<String, String>} data - author name and docxPath
 * @param  {Number} vol - Hl volume
 * @param  {Number} issue - Hl issue
 * @returns {Promise}
 */
async function docxProcess({ author, docxPath }, vol, issue) {
	return new Promise(async (res, err) => {
		try {
			const completeDocxPath = path.join(__dirname, `../../HL/${docxPath}`);
			docxParser.parseDocx(completeDocxPath, async function(data) {
				const article = parseContent(data);
				const articleHtml = template(article, vol, issue, author);
				await exportContent(articleHtml, "article");
				res("Article processed and logged");
			});
		} catch (error) {
			err(error);
		}
	});
}

module.exports = docxProcess;
