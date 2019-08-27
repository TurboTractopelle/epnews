describe("parseContent", () => {
	const data = require("../../fixtures/dataIn");
	const parseContent = require("./parseContent");

	it("converts the data from basic HL", () => {
		const article = parseContent(data.data1);
		expect(article.title).toBe("Martingale theory for housekeeping heat");
		expect(article.p.split(" ")[0]).toBe("Which");
		expect(article.authors.split(",")[0]).toBe("R. Chétrite");
	});

	/*it("converts the data from HL with intro <p>", () => {
		const article = parseContent(data.data2);
		expect(article.title).toBe("Intelligent metamaterials behave like electrostatic chameleons");
		expect(article.p.split(" ")[0]).toBe("Metashells");
		expect(article.authors.split(",")[0]).toBe("L. Xu");
	});*/
});
