const docxParser = require("docx-parser");
const path = require("path");
const parseContent = require("./parseContent");
const template = require("./template");
const exportContent = require("../log");
const chalk = require("chalk");
const { extractText } = require("doxtract");

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
			const data = await extractText(completeDocxPath);
			const article = parseContent(data, author);
			const articleHtml = template(article, author, vol, issue);
			await exportContent(articleHtml, "article");
			res("Article processed and logged");
		} catch (error) {
			err(error);
		}
	});
}

module.exports = docxProcess;
