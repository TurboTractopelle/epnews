describe("parseContent", () => {
	const dataIn = require("../../fixtures/dataIn");
	const parseContent = require("./parseContent");

	it("converts the data", () => {
		const article = parseContent(dataIn);
		expect(article.title).toBe("Martingale theory for housekeeping heat");
		expect(article.p.split(" ")[0]).toBe("Which");
		expect(article.authors.split(",")[0]).toBe("R. Chétrite");
	});
});
