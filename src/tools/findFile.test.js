const findFile = require("./findFile");

describe("findFile", () => {
	it("find files", () => {
		const arr = ["b180656.pdf", "epjb180656-fig4.jpg", "HL-Xu-EPJB-text_FINAL.docx"];
		expect(findFile(arr, "jpg")).toBe("epjb180656-fig4.jpg");
		expect(findFile(arr, "docx")).toBe("HL-Xu-EPJB-text_FINAL.docx");
	});
});
