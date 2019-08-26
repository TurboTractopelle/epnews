const renameFolder = require("./renameFolder");

describe("renameFolder", () => {
	it("renames", () => {
		expect(renameFolder("HL-Ben")).toBe("Ben");
	});

	it("renames with nb too", () => {
		expect(renameFolder("HL-Ben2")).toBe("Ben2");
	});
});
